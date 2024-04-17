const mongoose = require('mongoose')
const userlogindataSchema = new mongoose.Schema({
    Email_Id: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Login_Timings : {
        type: Date,
        required: true,
    }


})

module.exports = mongoose.model('userlogindata', userlogindataSchema)


