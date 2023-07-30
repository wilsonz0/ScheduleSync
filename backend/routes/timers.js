const express = require('express')
const Timer = require('../models/timerModel')
const router = express.Router()

// GETs
router.get('/', (req, res) => {
    res.json({mssg: 'GET all timers'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single timer"})
})

// POST
router.post('/', async (req, res) => {
    const {name, ownerID, startingTime, timerLength} = req.body
    try {
        const timer = await Timer.create({name, ownerID, startingTime, timerLength})
        res.status(200).json(timer)
        console.log("POSTED a new timer")
    }
    catch (error) {
        res.status(400).json({error: error.message})
        console.log("ERROR")
    }
})

// DELETE 
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a single timer"})
})

// PATCH (aka UPDATE)
router.patch('/:id', (req, res) => {
    res.json({mssg: "PATCH a single timer"})
})

module.exports = router