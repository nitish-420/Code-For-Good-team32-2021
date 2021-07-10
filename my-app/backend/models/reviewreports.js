const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users')
const Report = require('./reports')

const ReviewReportSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    toreview:{
        type:[Schema.Types.ObjectId],
        ref:'Report'
    }
});

module.exports = mongoose.model('ReviewReport', ReviewReportSchema);
