const express = require('express')
const router = express.Router()

// Get all users
router.get('/', function (req, res) {
    let sql = 'SELECT * FROM users'
    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Create User
router.post('/', function (req, res) {
    let sql = 'INSERT INTO users(username, firstname, lastname, email, password, address) VALUES (?)'
    let values = [
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.address
    ]

    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "User was created successfully"
        })
    })
})

// Get User by Id
router.get('/:id', (req, res) => {
    let id = req.params.id
    let sql = "SELECT * FROM `users` WHERE `id` = " + id + ";"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Delete Article
router.post('/:id', (req, res) => {
    let id = req.params.id
    let sql = "DELETE FROM `users` WHERE `id` = " + id + ";"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "User was deleted successfully"
        })
    })
})

module.exports = router