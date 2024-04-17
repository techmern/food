const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    drivername:{
        type:String,
        required:true,
    },
    mobno:{
        type:Number,
        required:true,
    },
    location:{
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
    
})

module.exports = mongoose.model('drivers',driverSchema)