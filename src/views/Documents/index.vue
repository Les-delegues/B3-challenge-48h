<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 font-mina">Documents de l'association</h1>
  </div>

  <h3 class="uppercase font-bold font-mina mt-8">Documents à signer</h3>
  <section class="p-2">
    <input
      type="text"
      class="input border border-gray-light focus:outline-none"
      placeholder="Rechercher un document..."
    />
    <ul class="flex flex-wrap mt-4">
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Statuts
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Projet associatif
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Diplômes
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Procès verbal Assemblée générale
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div
            class="bg-gray-brand rounded-lg border border-gray-light shadow-md p-4 w-24 h-24 flex items-center justify-center font-bold text-3xl text-gray-dark"
          >
            +
          </div>
          <h5 class="font-bold mt-2 w-24 text-center text-gray-dark">Ajouter</h5>
        </router-link>
      </li>
    </ul>
  </section>

  <h3 class="uppercase font-bold font-mina mt-8">Documents signés et sans signature</h3>
  <section class="p-2">
    <input
      type="text"
      class="input border border-gray-light focus:outline-none"
      placeholder="Rechercher un document..."
    />
    <ul class="flex flex-wrap mt-4">
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Statuts
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Projet de trésorerie
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Subvention régionale
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div class="rounded-lg border border-gray-light shadow-md p-4 w-24 h-24">
            <PDF class="w-full h-full" />
          </div>
          <h5
            class="font-bold mt-2 w-24 text-center whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Procès verbal Assemblée générale
          </h5>
        </router-link>
      </li>
      <li class="p-2">
        <router-link to="/documents/detail" class="flex flex-col items-center">
          <div
            class="bg-gray-brand rounded-lg border border-gray-light shadow-md p-4 w-24 h-24 flex items-center justify-center font-bold text-3xl text-gray-dark"
          >
            +
          </div>
          <h5 class="font-bold mt-2 w-24 text-center text-gray-dark">Ajouter</h5>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import PDF from '@/components/Logos/PDF.vue';

export default {
  name: 'Documents',
  components: { PDF },
};
</script>

<style scoped></style>
