const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }, 
    street:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
})

addressSchema.pre('find',function(next){
    this.populate('user')
    next()
})

module.exports = mongoose.model('address',addressSchema)