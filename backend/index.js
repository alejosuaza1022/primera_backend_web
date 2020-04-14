const express = require('express')
var cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(cors())
app.use(express.json())
    // middlewares
app.use(morgan('dev')) // ver las peticiones http que se hacen 


// routes
const route_task = require('./routes/bookmars')
app.use('/api/bookmark', route_task)


app.listen(4000);
console.log(" running on 3000 ")
module.exports = app