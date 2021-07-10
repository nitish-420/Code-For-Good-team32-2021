const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')

const EventSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
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
    image: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    joined: {
        type: String
    }
});


module.exports = mongoose.model('Event', EventSchema);