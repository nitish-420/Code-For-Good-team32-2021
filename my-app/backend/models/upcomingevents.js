const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Event = require('./events')

const upComingEvents = new Schema({
    upComingEvents: {
        type:Schema.Types.ObjectId,
        ref: 'Event'
    }
})

module.exports = mongoose.model('UpComingEvents', upComingEvents);
