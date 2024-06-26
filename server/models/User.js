const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    emailid:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
    mobno:{
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('user',userSchema)