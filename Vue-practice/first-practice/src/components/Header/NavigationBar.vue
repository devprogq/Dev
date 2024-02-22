<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  
    <div>
      <nav class="navbar" :class="{ 'expanded': isExpanded }">
        <div class="navbar-logo">
          <img src="" alt="Logo" />
        </div>
        <div class="navbar-toggle" @click="toggleNavbar">
          <i class="fas fa-bars"></i>
        </div>
        <ul class="navbar-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div class="main-content" :style="{ 'opacity': isExpanded ? '0.5' : '1' }">
        <!-- Contenido principal de la página -->
      </div>
    </div>
  </template>
  
  <script >
  export default {
    data() {
      return {
        isExpanded: false
      };
    },
    methods: {
      toggleNavbar() {
        this.isExpanded = !this.isExpanded;
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000; /* Asegura que la barra esté sobre el contenido */
    transition: all 0.3s ease;
  }
  
  .navbar-logo img {
    height: 30px; /* Ajusta el tamaño del logo según sea necesario */
  }
  
  .navbar-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .navbar-links li {
    margin-right: 20px;
  }
  
  .navbar-toggle {
    display: none; /* Se mostrará solo en dispositivos móviles */
  }
  
  .main-content {
    margin-top: 60px; /* Ajusta según la altura de la barra de navegación */
    transition: all 0.3s ease;
  }
  
  .expanded {
    height: auto !important; /* Hace que la barra de navegación se expanda */
  }
  
  .expanded .navbar-links {
    display: flex !important; /* Muestra los enlaces cuando la barra se expande */
  }
  
  .expanded .navbar-toggle {
    display: block !important; /* Muestra el botón de toggle cuando la barra se expande */
  }
  
  @media (max-width: 768px) {
    .navbar-links {
      display: none; /* Oculta los enlaces en dispositivos móviles */
      flex-direction: column; /* Apila los enlaces verticalmente */
      position: absolute;
      top: 60px; /* Ajusta según la altura de la barra de navegación */
      left: 0;
      background-color: #333;
      width: 100%;
      padding: 10px 0;
    }
  
    .navbar-links li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    .navbar-toggle {
      display: block; /* Muestra el botón de toggle en dispositivos móviles */
      cursor: pointer;
    }
  }
  </style>
  