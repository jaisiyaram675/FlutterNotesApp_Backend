const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('../models/Note');
const bodyParser = require('body-parser');
const router = express.Router();
router.get('/list', async function(req, res) {

    var notes = await Note.find();  
    // var notes = await Note.find();  

    res.json(notes);
  });

  router.get('/notes/list/:userId', async function(req, res) {

    var notes = await Note.find({ userId: req.params.userId });  
    // var notes = await Note.find();  

    res.json(notes);
  });

  router.post('/add', async function(req, res) {
    await Note.deleteOne({id: req.body.id});                       
    res.json(req.body);
    const newNote = new Note({
      id: req.body.id,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content
    });
    await newNote.save();
    res.send('new note added');
  });
  router.post('/delete', async function(req, res) {
    await Note.deleteOne({id: req.body.id});                       
    // res.json(req.body);
    res.send('note deleted');
  });

  module.exports = router