const express = require('express')
const cors = require('cors')
require('./config/config')


const app = express()
app.use(express.json())
app.use(cors())

const users = require('./routes/userRouter')
const { port } = require('./config/env')


app.use('/register', users)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})

