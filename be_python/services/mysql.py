import mysql.connector

mydb = mysql.connector.connect(
  host="codotronix.mysql.pythonanywhere-services.com",
  user="codotronix",
  password="B0ddoB@raB@r!"
)

mycursor = mydb.cursor()