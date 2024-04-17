const mongoose =  require('mongoose')
const ForgotPasswordAdminIdSchema = new mongoose.Schema({
   
    Admin_Id: {
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
})

ForgotPasswordAdminIdSchema.pre('find', function (next) {
    this.populate('admin')
    next()
})

module.exports = mongoose.model('forgotPasswordAdmin',ForgotPasswordAdminIdSchema)