// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');

// create server
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client/build'))

// database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist')

// routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

// start server
app.listen(process.env.PORT || 8000, function() {
  console.log('Server listening at http://localhost:8000');
})
