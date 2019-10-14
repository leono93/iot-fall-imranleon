  var db = require("../database");
var sensor_values = {
  getAllvalues: function(callback) {
    console.log(db)
    return db.query("select * from SensorData", callback);
  }
};
module.exports = sensor_values;