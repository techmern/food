const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    User_Id: {
        type: String,
        required: true
    },
    Restaurant_Id: {
        type: String,
        required: true
    },
    Order_Total: {
        type: Number,
        required: true
    },

    Delivery_Status: {
        type: String,
        enum: ['Pending', 'On the way', 'Delivered', 'Cancelled'],
        default: 'Pending',
        required: true
    },

    Menu_Id: {
        type: String,
        required: true
    },

    Order_Date: {
        type: Date,
        required: true
    },

    Address_Id: {
        type: String,
        required: true
    },

    Order_Status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Preparing', 'Ready for pickup', 'On the way', 'Delivered', 'Cancelled'],
        default: 'Pending',
        required: true
    },

});

orderSchema.pre('find', function (next) {
    this.populate('user')
    next()
})

orderSchema.pre('find', function (next) {
    this.populate('restaurants')
    next()
})

orderSchema.pre('find', function (next) {
    this.populate('menu')
    next()
})



module.exports = mongoose.model('orders', orderSchema);
