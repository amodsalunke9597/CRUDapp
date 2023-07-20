const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [30, 'Name must be 30 char'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
        
    }
})

module.exports = mongoose.model('User', userSchema)