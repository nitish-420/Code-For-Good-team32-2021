const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Event = require('./events')

const ReportSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    images: [String],
    minutes: {
        type: Number,
        required:true
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    }
});

module.exports = mongoose.model('Report', ReportSchema);
