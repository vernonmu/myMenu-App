const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/api/', function(req,res, next) {

  db.readFood([], function(err, food) {

    // console.log(food);
    // console.log(err);
    if (err) {return next(err)}
    return res.status(200).send(food)
  })
})

const port = 5000;
app.listen(port, function() {
  console.log(`working hard on ${port}`);
})
