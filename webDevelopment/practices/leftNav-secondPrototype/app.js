// Obtenemos la referencia al elemento de la barra de navegación y al círculo interactivo
const navbar = document.getElementById('miNavbar');
const expandCircle = document.getElementById('expandCircle');

// Agregamos un EventListener para el evento 'click' en el círculo
expandCircle.addEventListener('click', () => {
    // Cambiamos el ancho al hacer clic en el círculo 
    navbar.style.width = navbar.style.width === '25vw' ? '7vw' : '25vw';
});