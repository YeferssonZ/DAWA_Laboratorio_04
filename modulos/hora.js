const http = require('http');
const horaModule = require('./horaModulo');

const PORT = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    const horaActual = horaModule.obtenerHoraActual();

    // Formato 24 horas
    res.write(`Formato 24 horas: ${horaActual.hora}:${horaActual.minutos}:${horaActual.segundos}\n`);

    // Formato 12 horas
    const formato12Horas = `${(horaActual.hora % 12) || 12}:${horaActual.minutos}:${horaActual.segundos} ${(horaActual.hora < 12) ? 'AM' : 'PM'}`;
    res.write(`Formato 12 horas: ${formato12Horas}\n`);

    res.end();
}).listen(PORT);

console.log(`Servidor en ejecución en http://localhost:${PORT}/`);
