const mysql = require("mysql");
require('dotenv').config();

const db = mysql.createConnection({
    host: "localhost",
    port : 3306,
    user: "root",
    password: "",
    database: "taskmanagement",
  });
  


  
db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});
  


module.exports=db