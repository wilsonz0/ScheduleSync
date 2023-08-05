const express = require('express')
const router = express.Router()

const {getAllTimers, getTimerFromOwnerID, getTimer, 
        addNewTimer, deleteTimer} = require("../controllers/timerController")

// GET all timers
router.get('/', getAllTimers)

// GET all timer from an owner id
router.get('/user/:ownerID', getTimerFromOwnerID)

// GET timer by timer's id
router.get('/:id', getTimer)

// POST a new timer
router.post('/', addNewTimer)

// DELETE 
router.delete('/:id', deleteTimer)

module.exports = router