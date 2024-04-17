const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    User_Id: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    Pincode: {
        type: String,
        required: true
    }

});

addressSchema.pre('find', function (next) {
    this.populate('user')
    next()
})

module.exports = mongoose.model('address', addressSchema);
