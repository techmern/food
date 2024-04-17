const mongoose =  require('mongoose')
const adminSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email_Id:{
        type:String,
        required:true,
    },
    Password:{
        type:Number,
        required:true,   
    }

})

module.exports = mongoose.model('admin',adminSchema)