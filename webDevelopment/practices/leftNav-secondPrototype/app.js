// Obtenemos la referencia al elemento de la barra de navegación y al círculo interactivo
const navbar = document.getElementById('miNavbar');
const expandCircle = document.getElementById('expandCircle');

// Agregamos un EventListener para el evento 'click' en el círculo
expandCircle.addEventListener('click', () => {
    // Cambiamos el ancho al hacer clic en el círculo
    expandCircle.style.left = expandCircle.style.left === '7%' ? '15%' : '7%';
    navbar.style.width = navbar.style.width === '25vh' ? '7vw' : '25vh';
});