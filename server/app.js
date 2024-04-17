require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const db = require('./db')

const restaurantRoutes = require('./routes/restaurant')
const forgotRestRoutes = require('./routes/forgot_otp_restaurant')
const tableRoutes = require('./routes/table')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT

app.use('/restaurant',restaurantRoutes)
app.use('/forgototp',forgotRestRoutes)
app.use('/restauranttable',tableRoutes)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/test',(req,res)=>{
    res.send("Test done")
})

app.listen(port,()=>{
    console.log(`Server is running on: http://localhost:${port}`)
})