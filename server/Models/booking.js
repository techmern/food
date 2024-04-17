

const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    booking_time:{
        type:Date,
        required:true,
    },
    number_of_people:{
        type:Number,
        required:true, 
    },
    booking_date:{
        type:Date,
        required:true, 
    },
    booking_status:{
        type:String, 
        enum:['pending','book','cancle'], 
        default:'pending'
    }
    
})

bookingSchema.pre('find',function(next){
    this.populate('user')
    next()
})

bookingSchema.pre('find',function(next){
    this.populate('table')
    next()
})

bookingSchema.pre('find',function(next){
    this.populate('restaurants')
    next()
})

module.exports = mongoose.model('booking',bookingSchema)