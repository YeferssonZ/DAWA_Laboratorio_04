const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const publicDir = path.join(__dirname, 'public');

http.createServer(function (req, res) {
    const url = req.url;

    const rutaArchivo = {
        '/inicio': 'inicio.html',
        '/galeria': 'fotos.html',
    };

    const archivoSolicitado = rutaArchivo[url];

    if (archivoSolicitado) {
        const archivoPath = path.join(publicDir, archivoSolicitado);

        fs.readFile(archivoPath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
}).listen(PORT);

console.log(`Servidor en ejecución en http://localhost:${PORT}/`);
