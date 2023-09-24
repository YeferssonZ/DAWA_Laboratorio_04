function obtenerHoraActual() {
    const fecha = new Date();

    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    return {
        hora,
        minutos,
        segundos
    };
}

module.exports = {
    obtenerHoraActual
};
