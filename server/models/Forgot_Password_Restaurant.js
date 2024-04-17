const mongoose = require('mongoose');

const ForgetPasswordrestaurantSchema = new mongoose.Schema({
   
    Restaurant_Id: {
        type: String,
        required: true
    },
    New_Password: {
        type: String,
        required: true
    },
    OTP: {
        type: String,
        required: true
    },
    Email_Id: {
        type: String,
        required: true
    },
});

ForgetPasswordrestaurantSchema.pre('find', function (next) {
    this.populate('resturants')
    next()
})

module.exports = mongoose.model('forgetPasswordRestaurant', ForgetPasswordrestaurantSchema);
