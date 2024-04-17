const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    item_name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }, 
    stock:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    
})

menuSchema.pre('find',function(next){
    this.populate('restaurants')
    next()
})

module.exports = mongoose.model('menu',menuSchema)