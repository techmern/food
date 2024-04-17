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


const app = express()
app.use(bodyParser.json())
app.use(cors())

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
})