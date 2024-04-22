
const mongoose = require('mongoose')

const forgot_password_userSchema = new mongoose.Schema({
    new_password:{
        type:Number,
        required:true,
    },
    otp:{
        type:Number,
        required:true, 
    },
    
})

forgot_password_userSchema.pre('find',function(next){
    this.populate('user')
    next()
})

module.exports = mongoose.model('forgot_password_user',forgot_password_userSchema)