const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Userlogindata = require('../models/Userlogindata');
const Forgot_Password_User = require('../models/Forgot_Password_User');


// LOGIN --  http://localhost:5000/userlogin/userlogindata

router.post('/userlogindata', async (req, res) => {
    const Email_Id = req.body.Email_Id
    const Password = req.body.Password

    try {
        const login = await User.findOne({ Email_Id })


        if (!login) {
            
            return res.json({ 'msg': 'Email not found', 'loginsts': 0 })

        } else {
            if (await bcrypt.compare(Password, login.Password)) {

                return res.json({ 'msg': 'Login Successfully ', 'loginsts': 2 })
            } else {
                return res.json({ 'msg': 'password is Incorrect', 'loginsts': 1 })

            }

        }

    } catch (error) {

    }

})

// http://localhost:5000/userlogin/sucesslogindata

router.post('/sucesslogindata', async (req, res) => {
    try {

        const newsucesslogindata = new Userlogindata({
            Email_Id: req.body.Email_Id,
            Password: await bcrypt.hash(req.body.Password, 12),
            Login_Timings: new Date(),

        })

        const saveUserlogindata = await newsucesslogindata.save();

        // res.json(saveUser);
        if (saveUserlogindata) {
            res.status(200).json({ 'msg': 'User Data added Successfully', 'sts': '0' })
        } else {
            res.status(500).json({ 'msg': 'User Data Failed', 'sts': '1' })
        }

    } catch (error) {
        console.error(error);
    }

})


// http://localhost:5000/userlogin/userlogout

router.post('/userlogout', async (req, res) => {
    const uid = req.params.uid
    try {
        const logout = await User.findByIdAndDelete(uid)
        if (!logout) {
            return res.json({ 'msg': 'Logout Succuessfully', 'logoutsts': 0 })
        } else {
            return res.json({ 'msg': 'Failed to login', 'logoutsts': 1 })

        }
    } catch (error) {
        res.status(500).json({ 'Error': error })


    }
})

// http://localhost:5000/userlogin/checkpassword

router.post('/checkpassword', async (req, res) => {
    const { Email_Id, oldpassword } = req.body;

    try {
        // Find the user based on the email
        const user = await User.findOne({ Email_Id });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Compare the provided old password with the stored hashed password
        const isMatch = await bcrypt.compare(oldpassword, user.Password);

        if (isMatch) {
            return res.status(200).json({ success: true, message: 'Old password is correct.' });
        } else {
            return res.status(400).json({ success: false, message: 'Old password is incorrect.' });
        }
    } catch (error) {
        console.error('Error checking old password:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});
// http://localhost:5000/userlogin/changepassword

router.post('/changepassword', async (req, res) => {
    const { Email_Id, Password } = req.body;

    try {
        // Find the user based on the email
        const user = await User.findOne({ Email_Id });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Update the user's password in the database
        user.Password = hashedPassword;
        await user.save();

        return res.status(200).json({ success: true, message: 'Password changed successfully.' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});


// http://localhost:5000/userlogin/sendopt

router.post('/sendopt', async (req, res) => {
    try {

        if (!req.body.Email_Id) {
            return res.status(400).json({ "msg": "Email is required", "sts": 1 });
        }

        const sendopt = Math.floor(1000 + Math.random() * 9000);

        const sendotp = new Forgot_Password_User({
            Email_Id: req.body.Email_Id,
            OTP: sendopt
        });

        const forgotpass = await sendotp.save();

        if (forgotpass) {

            const otp = `${sendopt}`;
            console.log('Generated otp:', otp);

            return res.status(200).json({ "msg": "Reset link sent successfully", "sts": 0, forgotpass });
        } else {
            return res.status(400).json({ "msg": "Failed to save reset link", "sts": 1 });
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        return res.status(500).json({ "msg": "Internal server error", "sts": 1 });
    }
});

// http://localhost:5000/userlogin/resetpwd

router.post('/resetpwd', async (req, res) => {

    const { Email_Id, OTP, Password } = req.body;
    console.log(Email_Id)
    try {

        const forgetpwd = await Forgot_Password_User.findOne({ Email_Id })
        console.log(forgetpwd.OTP)

        if (forgetpwd.OTP === OTP) {

            const hashedPassword = await bcrypt.hash(Password, 12);

            const user = await User.findOneAndUpdate(
                { Email_Id: Email_Id },
                { Password: hashedPassword },
                { new: true }
            )
            return res.status(200).json({ message: 'Password changed successfully' });

        } else {
            return res.status(200).json({ message: 'Password changed failed' });
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }

})



module.exports = router