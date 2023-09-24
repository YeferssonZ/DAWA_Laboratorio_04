function calcularDiasFaltantes(fecha) {
    const fechaIngresada = new Date(fecha);
    const fechaActual = new Date();

    const diferenciaEnTiempo = fechaIngresada - fechaActual;

    const diasFaltantes = Math.ceil(diferenciaEnTiempo / (1000 * 60 * 60 * 24));

    return diasFaltantes;
}

module.exports = {
    calcularDiasFaltantes
};
