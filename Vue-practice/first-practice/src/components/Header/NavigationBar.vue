<template>
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>

    <div>
      <nav class="navbar" :class="{ 'expanded': isExpanded }">
        <div class="navbar-logo">
          i
          <i class="fi fi-rr-heart"></i>
          mili
        </div>
        <div class="navbar-toggle" @click="toggleNavbar">
          <i class="fi fi-rr-caret-square-left"></i>
        </div>
        <ul class="navbar-links">
          <li><i class="fi fi-rr-apps-add"></i><a href="#">main</a></li>
          <li><i class="fi fi-rr-diploma"></i><a href="#">about us</a></li>
          <li><i class="fi fi-rr-id-badge"></i><a href="#">services</a></li>
          <li><i class="fi fi-rr-mobile-button"></i><a href="#">contact</a></li>
        </ul>
      </nav>
      <div class="main-content" :style="{ 'opacity': isExpanded ? '0.3' : '1' }">


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
    transition: all 1s ease;
  }
  
  .navbar-logo {
    height: 29px; /* Ajusta el tamaño del logo según sea necesario */
    cursor: pointer;
  }
  
  .navbar-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .navbar-links li {
    margin-left: 20px;
    margin: 5px;
  }

   i {
		vertical-align: middle;
    margin-right: 5px;
    margin-left: 5px;
  }

  .navbar-toggle {
    transform: rotate(-55deg);
    transition: all 0.5s ease;
    display: none; /* Se mostrará solo en dispositivos móviles */
  }
  
  .main-content {
    margin-top: 30px; /* Ajusta según la altura de la barra de navegación */
    transition: all 0.3s ease;
  }
  
  .expanded {
    height: auto !important; /* Hace que la barra de navegación se expanda */
  }
  
  .expanded .navbar-links {
    display: flex !important; /* Muestra los enlaces cuando la barra se expande */
  }
  
  .expanded .navbar-toggle {
    transform: rotate(55deg);
    display: block !important; /* Muestra el botón de toggle cuando la barra se expande */
  }
  
  @media (max-width: 768px) {
    .navbar-links {
      display: none; /* Oculta los enlaces en dispositivos móviles */
      flex-direction: column; /* Apila los enlaces verticalmente */
      position: absolute;
      top: 44px; /* Ajusta según la altura de la barra de navegación */
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
  