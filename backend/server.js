require('dotenv').config()

const express = require("express")
const app = express()

const schedules = require('./routes/schedules')

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/schedules', schedules)

// for the root address
app.get('/', (req, res) => {
    res.json({mssg: 'Hello World!'})
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})