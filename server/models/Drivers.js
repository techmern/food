const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
   
    Name: {
        type: String,
        required: true
    },
    Mob_No: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('drivers', driverSchema);
