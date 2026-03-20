/*
    DATABASE PLACEHOLDER FILE

    This is where your real database connection code would go later.

    Example options:
    - MySQL
    - MongoDB
    - PostgreSQL
*/

const dbConfig = {
    host: "localhost",          // PLACEHOLDER
    user: "your_db_username",   // PLACEHOLDER
    password: "your_db_password", // PLACEHOLDER
    database: "your_database_name" // PLACEHOLDER
};

/*
    Example MySQL connection later:

    const mysql = require("mysql2");
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
      if (err) {
        console.log("Database connection failed:", err);
      } else {
        console.log("Connected to database");
      }
    });

    module.exports = connection;
*/

module.exports = dbConfig;