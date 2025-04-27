
/*
// Uvozimo http modul za kreiranje servera
const http = require('http');

// Definišemo server
const server = http.createServer((req, res) => {
    // Postavljamo zaglavlje odgovora za JSON
    res.setHeader('Content-Type', 'application/json');

    // Proveravamo koji je zahtevani URL
    if (req.method === 'GET' && req.url === '/api/greeting') {
        // Vraćamo JSON odgovor za rutu greeting
        res.statusCode = 200;  // Status kod za uspešan zahtev
        res.end(JSON.stringify({ message: 'Hello, World!' }));
    } else {
        // Za sve ostale rute, vraćamo 404 Not Found
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Definišemo port na kojem će server slušati
const PORT = 3000;

// Pokrećemo server
server.listen(PORT, () => {
    console.log(`Server radi na http://localhost:${PORT}`);
});
*/
