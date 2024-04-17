const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    
    Restaurant_Id: {
        type: String,
        required: true
    },
    Item_Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

menuSchema.pre('find',function(next){
    this.populate('restaurants')
    next()
})

module.exports = mongoose.model('menu', menuSchema);
