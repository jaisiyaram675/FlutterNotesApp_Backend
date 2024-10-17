const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://gauravdhull888:1234567890@cluster0.qrkpw.mongodb.net/notesDB").then(function() {
  app.get('/', function(req, res) {
    res.send('this is home page from server');
  });
  const newRouter =require('./router/Note')
  app.use('/notes', newRouter);


});
const PORT = process.env.PORT || 4000

app.listen(PORT
    , function() {
    console.log('server is running on port 4000 :'    + PORT);
  });