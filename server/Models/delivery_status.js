

const mongoose = require('mongoose')

const delivery_statusSchema = new mongoose.Schema({
    delivery_time:{
        type:Date,
        required:true,
    },
    Status:{
        type:String, 
        enum:['pending','received','cancle'], 
        default:'pending'
    }
    
})

delivery_statusSchema.pre('find',function(next){
    this.populate('orders')
    next()
})

delivery_statusSchema.pre('find',function(next){
    this.populate('drivers')
    next()
})

module.exports = mongoose.model('delivery_status',delivery_statusSchema)