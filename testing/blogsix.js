/*
// fetchExample.js
const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/posts/1';  // Javna API adresa

// Preuzmite podatke sa API-ja
fetch(url)
    .then(response => response.json())  // Parsirajte JSON odgovor
    .then(data => {
        console.log('Preuzeti Podaci:', data);  // Ispisivanje podataka
    })
    .catch(error => {
        console.error('Greška pri preuzimanju podataka:', error);  // Obrada grešaka
    });
*/


/*
// axiosExample.js
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';  // Javna API adresa

// Napravite GET zahtev koristeći axios
axios.get(url)
    .then(response => {
        console.log('Preuzeti Podaci:', response.data);  // Ispisivanje podataka
    })
    .catch(error => {
        console.error('Greška pri preuzimanju podataka:', error);  // Obrada grešaka
    });
*/