const mongoose = require('mongoose')
const Schema = mongoose.Schema
const timerSchema = new Schema({
    // {name, owner_id} becomes the primary key
    name: {
        type: String,
        required: true
    },
    ownerID: {
        type: Number,
        required: true
    },
    startingTime: {     // will be converted to UTC+0 before being stored && will be time from epoch
        type: Number,
        required: true
    },
    timerLength: {      // (temp) lets say it is in seconds
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Timer', timerSchema)