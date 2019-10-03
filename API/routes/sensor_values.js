var express = require("express");
var router = express.Router();
var sensor_values = require("../models/sensor_values");
    sensor_values.getAllvalues(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
module.exports = router;
