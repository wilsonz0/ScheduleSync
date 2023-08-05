const Timer = require('../models/timerModel')
const mongoose = require('mongoose')

// GET all timers
const getAllTimers = async (req, res) => {
    const timers = await Timer.find({})
    res.status(200).json(timers)
}

// GET all timer from an owner id
const getTimerFromOwnerID = async (req, res) => {
    const { ownerID } = req.params
    const ownersTimers = await Timer.find({ownerID: ownerID})
    
    if (!ownersTimers) return res.status(404).json({error: "owner not found"})
    res.status(200).json(ownersTimers)
}

// GET timer by timer's id
const getTimer = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "timer not found"})
    }

    const timer = await Timer.findById(id)
    if (!timer) return res.status(404).json({error: "timer not found"})
    res.status(200).json(timer)
}

// POST a new timer
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

// DELETE a timer
const deleteTimer = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "timer not found"})
    }

    const timer = await Timer.findOneAndDelete({_id: id})
    if (!timer) return res.status(404).json({error: "timer not found"})
    
    res.status(200).json(timer)
}

// UPDATE a timer
const updateTimer = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "timer not found"})
    }
    
    const timer = await Timer.findOneAndUpdate({_id: id}, { ...req.body })
    if (!timer) return res.status(404).json({error: "timer not found"})

    res.status(200).json(timer)
}

module.exports = {
    getAllTimers,
    getTimerFromOwnerID,
    getTimer,
    addNewTimer,
    deleteTimer,
    updateTimer
}