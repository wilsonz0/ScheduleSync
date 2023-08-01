const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    }
});

const scheduleSchema = new Schema({
    // {name, owner_id} becomes the primary key
    name: {
        type: String,
        required: true
    },
    ownerID: {
        type: Number,
        required: true
    },
    sunday: [eventSchema],
    monday: [eventSchema],
    tuesday: [eventSchema],
    wednesday: [eventSchema],
    thursday: [eventSchema],
    friday: [eventSchema],
    saturday: [eventSchema]
});

module.exports = mongoose.model('Schedule', scheduleSchema)