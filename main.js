const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')  

const userRoute = require('./routes/userRoute')
const productRoute = require ('./routes/photoRoute')
const commandRoute = require('./routes/commandRoute')

const app = express()
app.use(cors())
app.use(express.json())

app.use(userRoute)
app.use(productRoute)
app.use(commandRoute)


mongoose.connect('mongodb://127.0.0.1:27017/E-commerce');

app.listen(3001)
