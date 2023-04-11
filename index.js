const express = require('express')
const app = express()

const dbConnection = require('./src/utils/mysql.connector')

const post = require('./src/posts/posts.model')

app.get('/api/v1', function(req, res) {
    return res.json(req.headers)
})

app.get('/api/v1/posts', function(req, res) {
    return res.json([post])
})

app.listen(3000, function() {
    console.log('ROOMBOOKING listening on port 3000')
    

    dbConnection.connect(function(error) {
        if(error) throw error
            console.log("MySQL Database is connected successfully!!!")
    })
}) 