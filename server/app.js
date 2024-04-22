<<<<<<< HEAD
require ('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

// Define ALl Router
const createUserRouter = require('./routes/create_user')
const createUserloginRouter = require('./routes/create_userlogin')
const createRestaurantRouter = require('./routes/create_restaurant')
const createTableRouter = require('./routes/create_table')

=======
require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const db = require('./db')

const restaurantRoutes = require('./routes/restaurant')
const forgotRestRoutes = require('./routes/forgot_otp_restaurant')
const tableRoutes = require('./routes/table')
>>>>>>> origin/main

const app = express()
app.use(bodyParser.json())
app.use(cors())

<<<<<<< HEAD
const port = process.env.PORT || 5000

//Define all routes
app.use('/user', createUserRouter)
app.use('/userlogin', createUserloginRouter)
app.use('/restaurant', createRestaurantRouter)
app.use('/table', createTableRouter)

app.get('/', (req,res)=>{
    res.send("hello world ")
})

app.listen(port,()=> {
    console.log(`Server is  Running  on - http://localhost:${port}`)
=======
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
>>>>>>> origin/main
})