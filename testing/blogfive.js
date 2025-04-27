
require('dotenv').config();
console.log("API ključ:", process.env.API_KEY);
console.log("Host baze podataka:", process.env.DB_HOST);
console.log("Port baze podataka:", process.env.DB_PORT);

const { Client } = require('pg');

// Učitajte promenljive okruženja
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'mydatabase'
});

client.connect()
    .then(() => console.log("Povezano sa bazom podataka"))
    .catch((err) => console.error("Greška pri povezivanju", err.stack));


