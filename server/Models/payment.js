const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    paymentMethod:{
        type:String, 
        enum:['COD','PayTm','Debit/Credit Card'], 
        default:'COD' 
    },
    paymentStatus:{
        type:String, 
        enum:['pending','Successfull','cancle'], 
        default:'pending'
    }
})

paymentSchema.pre('find',function(next){
    this.populate('order')
    next()
})

module.exports = mongoose.model('payment',paymentSchema)