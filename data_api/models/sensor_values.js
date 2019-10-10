  var db = require("../database");
var sensor_values = {
  getAllvalues: function(callback) {
    return db.query("select * from SensorData", callback);
  }
};
module.exports = sensor_values;