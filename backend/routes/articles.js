const express = require('express')
const router = express.Router()

// Get all Article
router.get('/', function (req, res) {
    let sql = 'SELECT * FROM articles'

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Create new Article
router.post('/', function (req, res) {
    let sql = 'INSERT INTO articles(name, rentPerDay, rentedToUserWithId, rentedOutOn) VALUES (?)'
    let values = [
        req.body.name,
        req.body.rentPerDay,
        req.body.rentedToUserWithId,
        req.body.rentedOutOn
    ]

    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "Article was created successfully"
        })
    })
})

// Get Article by Id
router.get('/article/:id', (req, res) => {
    let id = req.params.id
    let sql = "SELECT * FROM articles WHERE id = " + id + ";"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Delete Article
router.post('/delete/:id', function (req, res) {
    let id = req.params.id
    let sql = "DELETE FROM articles WHERE id = " + id + ";"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "Article was deleted successfully"
        })
    })
})

// Get rentedOut Articles
router.get('/rented', function (req, res) {
    let sql = "SELECT * FROM articles WHERE rentedToUserWithId != 0"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Get articles not rented out
router.get('/notRented', function (req, res) {
    let sql = "SELECT * FROM articles WHERE rentedToUserWithId = 0"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json(data)
    })
})

// Update article
router.post('/update/:id', function (req, res) {
    let sql = `UPDATE articles SET rentedToUserWithId = ` + req.body.rentedToUserWithId + `, rentedOutOn = "` + req.body.rentedOutOn + `" WHERE id = ` + req.params.id + ";"

    db.query(sql, function (err, data, fields) {
        if (err) throw err
        res.json({
            status: 200,
            message: "Updated article successfully"
        })
    })
})

module.exports = router