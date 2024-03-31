<!--  -->
<script setup>
//importacões
import { onMounted, ref } from "vue";

//vetor contendo pokemons
let vetor = ref([]);

// variavel para exibir carregamento
let carregamento = ref(true);

//variavel para armazenar o termo da filtragem
let termoFiltragem = ref('');

// onMounted

//tornar funcao assincrona (async para dizer que é assincrona ) (await para travar o fetch ate ele receber todos os dados)
onMounted(async () => {
  for (let indice = 152; indice <= 251; indice++) {
    let requisicao = await fetch("https://pokeapi.co/api/v2/pokemon/" + indice);
    //faz a requisicao e converte para json
    let pokemon = await requisicao.json();
    //guardando json em um vetor
    vetor.value.push(pokemon);
  }

  carregamento.value = false;
});

//funcao para filtrar pokemons
function filtrar(){
  return vetor.value.filter(obj => obj.name.toLowerCase().includes(termoFiltragem.value.toLowerCase()));
}

</script>
<!-- HTML -->
<template>

  <div class="carregamento" v-if="carregamento">
    <img style="box-shadow: 10px 10px 15px;" src="../complementos/carregamento.gif">
  </div>

  <main class="container" v-if="!carregamento">

    {{ termoFiltragem }}

    <!-- Filtragem -->
    <div class="row">
      <div class="col-12">
        <input type="text" v-model="termoFiltragem" placeholder="Qual pokemon você está procurando?" class="form-control pesquisa">
        <p v-if="filtrar().length == 0">Não foi encontrado nenhum Pokémon.</p>
        <p v-else-if="filtrar.length == 1">Foi encontrado apenas um Pokémon.</p>
        <p v-else>Foram encontrados {{ filtrar().length }} Pokémons.</p>
      </div>
    </div>

    <!-- Listagem -->


    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="v in filtrar()">
        <div class="card" :class="v.types[0].type.name">
            <!-- src dinamico -->
            <img :src="v.sprites.other.home.front_default" >
            <p>{{ v.name }}</p>
            
        </div>
      </div>
    </div>
  </main>
</template>
