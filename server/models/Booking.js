const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   
    User_Id: {
        type: String,
        required: true
    },
    Table_Id: {
        type: String,
        required: true
    },
    Restaurant_Id: {
        type: String,
        required: true
    },
    Booking_Status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed', 'No Show', 'In Progress'],
        default: 'No Show',
        required: true
    },
    Booking_Date: {
        type: Date,
        required: true
    },

    Number_Of_People: {
        type: Number,
        required: true
    },
    
});

bookingSchema.pre('find', function (next) {
    this.populate('user')
    next()
})

bookingSchema.pre('find', function (next) {
    this.populate('table')
    next()
})

bookingSchema.pre('find', function (next) {
    this.populate('restaurants')
    next()
})

module.exports = mongoose.model('booking', bookingSchema);
