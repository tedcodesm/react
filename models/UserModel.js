const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    password:{
        type: String
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;