const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
   
    Table_Available: {
        type: String,
        enum: ['Available', 'Occupied', 'Reserved'],
        default: 'Available', 
        required: true  
    },
    Total_Table: {
        type: Number,
        required: true
    },
    Restaurant_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurants', 
        required: true
    },
  
    Table_Capacity: {
        type: Number,
        required: true
    },
   
   
});

tableSchema.pre('find', function (next) {
    this.populate('Restaurant_Id')
    next()
})

module.exports = mongoose.model('table', tableSchema);
