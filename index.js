const express = require('express')
const app = express()

const bodyparser = require('body-parser')

//requesting body parsing Middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

const dbConnection = require('./src/utils/mysql.connector')

const post = require('./src/posts/posts.model')

//app.get('/api/v1', function(req, res) {
  //  return res.json(req.headers)
//})

app.get('/api/v1/posts', function(req, res) {
    var sql2 = "SELECT * FROM posts*"
    return dbConnection.query(sql2, function(error, results){
        if(error) throw error;
        return res.json(results)
    })
})

//Create new post/article in the database
app.post('/api/v1/posts', function(req, res){
    //console.log(req.body)
    const {name, imageurl,summery} = req.body//destructure sent properties grom the request body

    //construct sql query
    var sql = `INSERT INTO posts (name, imageUrl, summary) VALUES ('${name}','${imageUrl}','${summary}')`;
    
    //console.log(sql)
    //Query the MySQL database and return results to the client app ie POSTMAN or web app
    return dbConnection.query(sql, function(error, results){
        if(error) throw error; 

        return res.json(results)

        //console.log("1 record inserted");
    });
    //res.json(sql)
})


app.listen(3000, function() {
    console.log('ROOMBOOKING listening on port 3000')
    

    dbConnection.connect(function(error) {
        if(error) throw error
            console.log("Connected to MySQL")
    })
}) 