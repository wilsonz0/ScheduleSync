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
    startingEpoch: {
        type: Number,
        required: true
    },
    timerLength: {      // will be in seconds
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Timer', timerSchema)