const mongoose = require('mongoose');

const deliveryStatusSchema = new mongoose.Schema({
    
    Order_Id: {
        type: String,
        required: true
    },
    Drivers_Id: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        enum: ['Pending', 'On the way', 'Delivered', 'Cancelled'],
        default: 'Pending',
        required: true
    },
    Delivery_Date: {
        type: String,
        required: true


    }
});

deliveryStatusSchema.pre('find', function (next) {
    this.populate('orders')
    next()
})

deliveryStatusSchema.pre('find', function (next) {
    this.populate('drivers')
    next()
})

module.exports = mongoose.model('deliverystatus', deliveryStatusSchema);
