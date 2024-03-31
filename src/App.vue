
<!-- JS -->
<script setup>
//importacao dos elementos vue-router
import { RouterLink, RouterView } from "vue-router";

//importacao do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importar estilo css
import './complementos/estilos.css';
//importar componente de navegacao
import BarraNavegacao from './componentes/BarraNavegacao.vue';


</script>

<!-- HTML -->
<template>
  <!-- Navbar -->
  <BarraNavegacao />
  
  <!-- Visualizar conteudo das paginas -->
  <RouterView />
</template>

