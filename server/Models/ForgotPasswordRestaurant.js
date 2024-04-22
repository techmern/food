
const mongoose = require('mongoose')

const forgot_password_restaurantSchema = new mongoose.Schema({
    emailid:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300,
    }  
    
})

module.exports = mongoose.model('ForgotPasswordRestaurant',forgot_password_restaurantSchema)
