const fs = require('fs');

function cargarPagina(ruta, res) {
    const archivo = `${__dirname}/${ruta}.html`;

    fs.readFile(archivo, 'utf-8', (err, contenido) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Página no encontrada');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contenido);
        }
    });
}

module.exports = {
    cargarPagina
};
