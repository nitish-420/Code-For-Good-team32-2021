const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Event = require('./events')



const pastEvents = new Schema({
    pastEvents:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    }
})

module.exports = mongoose.model('PastEvents', pastEvents);