var mysql = require('mysql');
var connection = mysql.createPool({
  host: '172.20.240.114',
  user: 'iot-project',
  password: 'oamkiot2019',
  database: 'sensor_vals'
});
module.exports = connection;