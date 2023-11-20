// Obtenemos la referencia al elemento de la barra de navegación y al círculo interactivo
const navbar = document.getElementById('miNavbar');
const expandCircle = document.getElementById('expandCircle');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

// Agregamos un EventListener para el evento 'click' en el círculo
expandCircle.addEventListener('click', () => {
    // Cambiamos el ancho al hacer clic en el círculo 
    navbar.style.width = navbar.style.width === '7vw' ? '22vw' : '7vw';
    
    // Movemos el círculo junto con la navbar y rotamos las líneas
    if (navbar.style.width === '7vw') {
        expandCircle.style.left = '6vw';
        line1.style.transform = 'rotate(45deg)';
        line2.style.transform = 'rotate(-45deg)';
    } else {
        expandCircle.style.left = '21vw'; // Ajuste al mismo valor que el left inicial
        line1.style.transform = 'rotate(0deg)';
        line2.style.transform = 'rotate(0deg)';
    }
});
