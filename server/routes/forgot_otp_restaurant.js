const express = require('express')
const router = express.Router()

const ForgotOTPModel = require('../Models/ForgotPasswordRestaurant')


// http://localhost:5000/forgototp/forgotpassotp
router.post('/forgotpassotp',async(req,res)=>{
    try {
        const newForgot = new ForgotOTPModel({
            emailid:req.body.emailid,   
            otp:req.body.otp,     
            
        })
        const forgotpassotp = await newForgot.save()
        
        if (forgotpassotp) {
            const otp = `${req.body.otp}`;
            console.log(otp);
            res.status(200).json({"msg":"Added","sts":0,forgotpassotp})
        } else {
            res.status(400).json({"msg":"Not Added","sts":1})
        }
    } catch (error) {
        console.error(error)   
   }

})

module.exports = router