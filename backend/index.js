const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require("mysql")

const app = express()

var server = {
    port: 4000
}

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rainerzufall',
    database: 'backend'
})

const usersRouter = require('./routes/users')
const articleRouter = require('./routes/articles')

app.use(cors())
app.use(bodyParser())

// Routes
// UsersRouter
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/articles', articleRouter)

app.listen(server.port, () => {
    console.log("Server is listening on port ", server.port)
})