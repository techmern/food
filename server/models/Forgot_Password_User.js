const mongoose = require('mongoose');

const ForgetPasswordUserSchema = new mongoose.Schema({
    Email_Id: {
        type: String,
        required: true
    },

    OTP: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('userforgetpassword', ForgetPasswordUserSchema);
