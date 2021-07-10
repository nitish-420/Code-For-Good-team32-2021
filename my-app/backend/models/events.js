const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Event = require('./events')

const EventSchema = new Schema({
    date: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    volunteers: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    joined: {
        type: Number,
        default: 0
    }
});



module.exports = mongoose.model('Event', EventSchema);