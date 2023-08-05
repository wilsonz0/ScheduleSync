const Timer = require('../models/timerModel')

// get all timers
const getAllTimers = async (req, res) => {
    const timers = await Timer.find({})
    res.status(200).json(timers)
}


// get all timers from an owner
const getTimerFromOwnerID = async (req, res) => {
    const { ownerID } = req.params
    const ownersTimers = await Timer.find({ownerID: ownerID})
    
    if (!ownersTimers) return res.status(404).json({error: "owner not found"})
    res.status(200).json(ownersTimers)
}

// get a single timer
const getTimer = async (req, res) => {
    const { id } = req.params
    // do a premetive check so that backend does not crash
    const timer = await Timer.findById(id)
    if (!timer) return res.status(404).json({error: "timer not found"})
    res.status(200).json(timer)
}

// post a new timer
const addNewTimer = async (req, res) => {
    const {name, ownerID, startingTime, timerLength} = req.body
    try {
        const timer = await Timer.create({name, ownerID, startingTime, timerLength})
        res.status(200).json(timer)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a timer
const deleteTimer = async (req, res) => {
    const { id } = req.params
    // do a premetive check so that backend does not crash
    const timer = await Timer.findOneAndDelete({_id: id})
    if (!timer) return res.status(404).json({error: "timer not found"})
    
    res.status(200).json(timer)
}

module.exports = {
    getAllTimers,
    getTimerFromOwnerID,
    getTimer,
    addNewTimer,
    deleteTimer
}