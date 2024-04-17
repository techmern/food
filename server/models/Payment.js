const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
   
    Order_Id: {
        type: String,
        required: true
    },
    Payment_Method: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Payment_status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'], 
        default: 'Pending',
        required: true
    }
});

paymentSchema.pre('find', function (next) {
    this.populate('orders')
    next()
})

module.exports = mongoose.model('payment', paymentSchema);
