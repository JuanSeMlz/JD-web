// Selección del botón y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Evento para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});



window.onload = function() {
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
};
// Función para abrir el pop-up
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Función para cerrar el pop-up
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Cerrar el pop-up si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = "none";
    }
}