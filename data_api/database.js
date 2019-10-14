var mysql = require('mysql');
var connection = mysql.createPool({
  host: '193.167.107.131',
  port: '22',
  user: 'iot-project',
  password: 'oamkiot2019',
  database: 'sensor_vals'
});
module.exports = connection;