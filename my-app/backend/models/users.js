const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const LoginSchema=new Schema({
//     username:{
//         type:String,
//         required:true
//     },
//     email: {
//         type: String,
//         required: true
//     },

// })

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String
    },
    mobile: {
        type: Number
    },
    description: {
        type: String
    }
});


module.exports = mongoose.model('User', UserSchema);