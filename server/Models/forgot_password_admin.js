
const mongoose = require('mongoose')

const forgot_password_adminSchema = new mongoose.Schema({
    new_password:{
        type:Number,
        required:true,
    },
    otp:{
        type:Number,
        required:true, 
    },
    
})

forgot_password_adminSchema.pre('find',function(next){
    this.populate('admin')
    next()
})

module.exports = mongoose.model('forgot_password_admin',forgot_password_adminSchema)