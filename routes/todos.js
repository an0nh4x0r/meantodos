var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://admin:admin@ds145649.mlab.com:45649/mean_todos_app', ['todos']);


router.get('/todos', function (req, res, next) {
    db.todos.find(function (err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;