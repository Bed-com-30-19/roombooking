const express = require('express')
const app = express()

const post = require('./src/posts/post.model')

app.get('/api/v1', function(req, res){
    return res.json(res)
})

app.get('/api/v1/posts', function(req, rea){
    return res.json([post])
})

app.listen(3000, function(){
    console.log('Room Booking  listening on port 3000')
})
