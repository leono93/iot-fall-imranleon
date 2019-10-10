import mysql.connector

#
# creating a database
#
user = mysql.connector.connect(
        host='localhost',
        user='iot-project',
        passwd='oamkiot2019'
        )
user_handle = user.cursor()
user_handle.execute('CREATE DATABASE sensor_vals')

#
#createing a table in the database
#
db = mysql.connector.connect(
        host='localhost',
        user='iot-project',
        passwd='oamkiot2019',
        database='sensor_vals'
        )

db_handle = db.cursor()

mySql_Create_Table_Query = """CREATE TABLE SensorData (
        humidity float NOT NULL, 
        pressure float NOT NULL, 
        temperature float NOT NULL, 
        curr_time varchar(250) NOT NULL)"""

db_handle.execute(mySql_Create_Table_Query)
db_handle.execute("SHOW TABLES")

for x in db_handle:
    print(x)







