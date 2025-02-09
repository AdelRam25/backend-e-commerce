const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')  
require("dotenv").config()

const userRoute = require('./routes/userRoute')
const photoRoute = require ('./routes/photoRoute')
const messageRoute = require('./routes/messageRoute')


const app = express()

app.use("./public", express.static('public'));
app.use(cors())
app.use(express.json())

app.use(userRoute)
app.use(photoRoute)
app.use(messageRoute)
app.use(require('./middlewares/notFoundMiddleware'))
app.use(require('./middlewares/errorMiddleware'))


mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, console.log(`Server started on: http://localhost:${process.env.PORT}`))
    })
    .catch(() => {
        console.log('Could not connect to the database.')
    })