<template>
  <h1 class="text-2xl font-bold py-4 font-mina">Tableau de bord</h1>

  <h3 class="uppercase font-bold font-mina mt-8">Les alertes</h3>
  <section class="flex flex-wrap p-2">
    <div
      class="m-2 flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm"
    >
      <span
        class="inline-flex bg-orange-brand text-white rounded-full h-6 px-3 justify-center items-center"
        >Attention</span
      >
      <span class="inline-flex px-2 text-orange-brand">
        <strong class="mr-2">Dans 2 semaines :</strong> renouveler votre demande de subvention en
        <router-link to="/" class="ml-1 underline">suivant la démarche ici</router-link>
      </span>
    </div>
    <div
      class="m-2 flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm"
    >
      <span
        class="inline-flex bg-orange-brand text-white rounded-full h-6 px-3 justify-center items-center"
        >Attention</span
      >
      <span class="inline-flex px-2 text-orange-brand"
        >Deux membres licenciés n'ont pas de licence
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
