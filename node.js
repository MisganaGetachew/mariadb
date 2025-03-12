const mariadb = require('mariadb');
const express = require('express');

const app = express();
const port = 3000;

// Create a connection pool
const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'yourUsername', 
    password: 'yourPassword',
    database: 'yourDatabase',
    connectionLimit: 5
});

// Test the connection
pool.getConnection()
    .then(conn => {
        console.log("Connected to MariaDB!");
        conn.release(); // release to pool
    })
    .catch(err => {
        console.error("Unable to connect to MariaDB: ", err);
    });

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});