require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const app = express()

const schedules = require('./routes/schedules')
const timers = require('./routes/timers')

// middleware
app.use (express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/schedules', schedules)
app.use('/timers', timers)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("Connection Failed\n", error)
    })

// for the root address
app.get('/', (req, res) => {
    res.json({mssg: 'Hello World!'})
})
