const mongoose = require('mongoose')
const { databaseConnection } = require('./env')

mongoose.connect(databaseConnection)
