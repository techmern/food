const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminname:{
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

module.exports = mongoose.model('admin',adminSchema)