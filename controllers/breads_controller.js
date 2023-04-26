const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads.js');

breads.get("/", (req, res) => {
    res.render('index', {
        breads: Bread,
    });
    //res.send(Bread);
});

breads.get('/:arrayIndex', (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    });
} else {
    res.send("404");
}
  });
  
  

module.exports = breads;