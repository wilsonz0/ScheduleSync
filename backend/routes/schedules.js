const express = require('express')
const router = express.Router()

// GETs
router.get('/', (req, res) => {
    res.json({mssg: 'GET all schedules'})
})

router.get('/:ownerID', (req, res) => {
    res.json({mssg: "GET all timers from a owner"})
})

router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single schedule"})
})

// POST
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new schedule'})
})

// DELETE 
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a single schedule"})
})

// PATCH (aka UPDATE)
router.patch('/:id', (req, res) => {
    res.json({mssg: "PATCH a single schedule"})
})

module.exports = router