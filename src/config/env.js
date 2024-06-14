require('dotenv').config()
module.exports = {
    port: process.env.PORT,
    databaseConnection: process.env.DATABASECONNECTION,
}
