const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderTotal:{
        type:String,
        required:true,
    },
    orderDate:{
        type:Date,
        required:true,
    },
    deliveryStatus:{
        type:String, 
        enum:['pickup','on the way','delivered'], 
        default:'pickup' 
    },
    orderStatus:{
        type:String, 
        enum:['pending','received','cancle'], 
        default:'pending'
    }
})

orderSchema.pre('find',function(next){
    this.populate('user')
    next()
})

orderSchema.pre('find',function(next){
    this.populate('restaurants')
    next()
})

orderSchema.pre('find',function(next){
    this.populate('menu')
    next()
})

orderSchema.pre('find',function(next){
    this.populate('address')
    next()
})

module.exports = mongoose.model('orders',orderSchema)