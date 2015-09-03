var express = require('express');
var router = express.Router();
var path = require('path');
var students = require('../models/students.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in index.js showing: ', students);

  //var file = path.join('__dirname', '../models/students.json');


  res.render('index.jade', {"student": students});
});

module.exports = router;
