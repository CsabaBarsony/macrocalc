'use strict';

const express = require('express');
const db      = require('./db');

const app     = express();

app.use(express.static('./'));

app.get('/getallfoods', function (req, res) {
    res.send(db.getAllFoods());
});

app.get('/getfood/:id', function(req, res) {
    res.send(db.getFood(req.params.id));
});

app.get('/queryfood/:text', function(req, res) {
    res.send(db.queryFood(req.params.text));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
