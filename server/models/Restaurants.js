const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
   
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Mob_No: {
        type: String,
        required: true
    },
    Restaurant_Status: {
        type: String,
        enum: ['Open', 'Closed', 'Temporarily Closed'], 
        default: 'Open', 
        required: true
    }
});

module.exports = mongoose.model('restaurants', restaurantsSchema);
