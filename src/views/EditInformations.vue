<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 text-blue-brand">Informations de l'association CCBA</h1>
    <router-link to="/" class="bg-gray-brand p-2 rounded-lg">
      <svg class="h-6 w-6 text-gray-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </router-link>
  </div>

  <form method="POST" class="border border-gray-brand w-full rounded-lg shadow-md">
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="name" class="text-gray-dark w-1/4">Nom</label>
      <input id="name" v-model="name" type="text" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full" />
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="acronym" class="text-gray-dark w-1/4">Acronyme</label>
      <input id="acronym" v-model="acronym" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full" />
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="object" class="text-gray-dark w-1/4">Objet</label>
      <input id="object" v-model="object" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="address1" class="text-gray-dark w-1/4">Adresse ligne 1</label>
      <input id="address1" v-model="address1" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="address2" class="text-gray-dark w-1/4">Adresse ligne 2</label>
      <input id="address2" v-model="address2" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="zipcode" class="text-gray-dark w-1/4">Code postal</label>
      <input id="zipcode" v-model="zipcode" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="city" class="text-gray-dark w-1/4">Ville</label>
      <input id="city" v-model="city" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="country" class="text-gray-dark w-1/4">Pays</label>
      <input id="country" v-model="country" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
    <div class="flex flex-row px-4 py-3">
      <label for="creationDate" class="text-gray-dark w-1/4">Date de création</label>
      <input id="creationDate" v-model="creationDate" class="text-blue-brand w-2/4 bg-gray-brand px-3 py-2 rounded-full"/>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditInformations',
  data: () => ({
    name: 'Club de Canne et Baton d\'Aquitaine',
    acronym: 'CCBA',
    object: 'Association de sport',
    address1: 'Adresse 1',
    address2: 'Comp.',
    zipcode: '33000',
    city: 'Bordeaux',
    country: 'France',
    creationDate: '2004-01-12',
  }),
};
</script>
