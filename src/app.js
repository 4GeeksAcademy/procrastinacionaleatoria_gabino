const excusas = [
    "El momento perfecto aún no ha llegado.",
    "Voy a limpiar y ordenadar la habitación, para disponer de un ambiente inspirador.",
    "Creo que debería tomarme un café antes, para estar más despierto.",
    "Estoy esperando a que me llegue la inspiración.",
    "Tengo que estudiar más, prepararme más antes de comenzar.",
    "Comenzaré el día uno, además es lunes, y voy a tiro hecho.",
    "Primero leeré durante una hora, para tener el cerebro preparado.",
    "Tengo que deshacerme de estos asuntillos pendientes y ya estaré libre para codear."
];
function obtenerExcusaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * excusas.length);
    return excusas[indiceAleatorio];
}
window.onload = function() {
    const excusaElemento = document.getElementById('excusa');
    excusaElemento.textContent = obtenerExcusaAleatoria();
};