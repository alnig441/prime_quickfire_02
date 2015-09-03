var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var students = require('../models/students.json');

var file = path.join(__dirname, '../models/students.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('in students get router') ;
  //res.render(students);
  res.send(students);
});

router.post('/', function(req, res, next){
  console.log('in students post ', req.body.firstName);
  var studentsArray = students;
  console.log(students);

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  studentsArray.push({"firstName": req.body.firstName, "lastName": req.body.lastName});

  studentsArray = JSON.stringify(studentsArray);
  console.log(studentsArray);

  fs.writeFile(file, studentsArray, 'utf8', function(err){
    if(err){
      console.log(err);
      next(err);
    }
    else{
      console.log('write success');
      res.sendStatus(200);
    }
  })

});


module.exports = router;
