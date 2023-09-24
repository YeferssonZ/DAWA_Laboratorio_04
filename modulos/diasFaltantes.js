const http = require('http');
const url = require('url');
const diasFaltantesModule = require('./diasFaltantesModulo');

const PORT = 8080;

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const queryDate = parsedUrl.query.date;

    if (queryDate) {
        const diasFaltantes = diasFaltantesModule.calcularDiasFaltantes(queryDate);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.write(`Días faltantes hasta ${queryDate}: ${diasFaltantes} días`);
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('Por favor, ingresa una fecha válida en la URL.');
    }

    res.end();
}).listen(PORT);

console.log(`Servidor en ejecución en http://localhost:${PORT}/`);

