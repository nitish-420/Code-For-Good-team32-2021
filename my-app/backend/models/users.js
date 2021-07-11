const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('./events')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    address: {
        type: String
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
    },
    minutes: {
        type: Number,
        default: 0
    },
    eventsCount: {
        type: Number,
        default: 0
    },
    pastEvents: {
        type: [Schema.Types.ObjectId],
        ref: 'Event'
    },
    pendingEvents: {
        type: [Schema.Types.ObjectId],
        ref: 'Event'
    }
});


module.exports = mongoose.model('User', UserSchema);

