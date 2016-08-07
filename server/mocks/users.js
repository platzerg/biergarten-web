/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var nedb = require('nedb');

  var db = new nedb({
    filename: 'userdb',
    autoload: true
  });

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    if( (req.body.data.type) !== 'users') throw new Error('Fehler');
    var user = req.body.data.attributes;
    console.log('UserName' +user.username);
    db.find({}).sort({id: -1}).limit(1).exec((err, users) => {
      if(users.length !== 0) {
        user.id = users[0].id +1;
      } else {
        user.id = 0;
      }

      db.insert(user, function (err, createdUser) {
        res.status(201);
        res.send(JSON.stringify({
          data: {
            attributes: createdUser,
            type: 'users'
          }
        }));
        res.end();

      });

    });

  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/users', require('body-parser').json({
    type: 'application/vnd.api+json'
  }));
  app.use('/api/users', usersRouter);
};
