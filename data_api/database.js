var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'iot-project',
  password: 'oamkiot2019',
  database: 'sensor_vals'
});
module.exports = connection;