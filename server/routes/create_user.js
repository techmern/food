const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


const router = express.Router();

// INSERCT http://localhost:5000/user/userregister

router.post('/userregister', async (req, res) => {
    try {
        const newUser = new User({
            Username: req.body.Username,
            Email_Id: req.body.Email_Id,
            Password: await bcrypt.hash(req.body.Password, 12),
            Mob_No: req.body.Mob_No,

        })

        const saveUser = await newUser.save();
        // res.json(saveUser);
        if (saveUser) {
            res.status(200).json({ 'msg': 'User Data added Successfully', 'sts': '0' })
        } else {
            res.status(500).json({ 'msg': 'User Data Failed', 'sts': '1' })
        }

    } catch (error) {
        console.error(error);
    }

})


// view http://localhost:5000/user/viewuser

router.get('/viewuser', async (req, res) => {
    try {
        const users = await User.find()

        res.json(users)

    } catch (error) {
        res.status(500).json({ 'Error': error })

    }
})

// view http://localhost:5000/user/singleuser
router.get('/singleuser/:_id', async (req, res) => {
    const _id = req.params._id;

    try {
        if (!_id || _id === 'undefined') {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        // Validate that _id is a valid ObjectId format
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        const user = await User.findOne({ _id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userInfo = {
            Username: user.Username,
            Email_Id: user.Email_Id,
            Mob_No: user.Mob_No
        };

        res.json(userInfo);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//  http://localhost:5000/user/updateuser
router.put('/updateuser/:Email_Id', async (req, res) => {
    const { Email_Id } = req.params;
    const { Username, Mob_No, New_Email } = req.body;
    try {
        console.log('Updating user:', Email_Id, Username, Mob_No, New_Email);

        // Find the user document based on email
        const updatedUser = await User.findOneAndUpdate(
            { Email_Id: Email_Id },
            { $set: { Username: Username, Mob_No: Mob_No, Email_Id: New_Email } },
            { new: true } // Return the updated document
        );
        console.log('Updated User:', updatedUser);

        // Check if the user was found and updated
        if (!updatedUser) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Send the updated user object in the response
        res.status(200).json({ msg: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});




module.exports = router
