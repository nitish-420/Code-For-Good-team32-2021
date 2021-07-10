const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Event = require('./events')

const EventSchema = new Schema({
    date: {
        type: String
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
    descriptions: {
        type: String,
        required: true
    },
    joined: {
        type: Boolean
    }
});

const upComingEvents = new Schema({
    upComingEvents: {
        type:Schema.Types.ObjectId,
        ref: 'Event'
    }
})

const pastEvents = new Schema({
    pastEvents:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    }
})

module.exports = mongoose.model('Event', EventSchema);