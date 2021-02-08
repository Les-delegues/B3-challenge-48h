<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 text-blue-brand">Informations de l'association CCBA</h1>
    <edit-button link="/informations" />
  </div>

  <form method="POST" class="border border-gray-brand w-full rounded-lg shadow-md">
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="name" class="text-gray-dark w-1/4">Nom</label>
      <input id="name" v-model="name" type="text" class="input" />
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="acronym" class="text-gray-dark w-1/4">Acronyme</label>
      <input id="acronym" v-model="acronym" class="input" />
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="object" class="text-gray-dark w-1/4">Objet</label>
      <input id="object" v-model="object" class="input"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="address1" class="text-gray-dark w-1/4">Adresse ligne 1</label>
      <input id="address1" v-model="address1" class="input"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="address2" class="text-gray-dark w-1/4">Adresse ligne 2</label>
      <input id="address2" v-model="address2" class="input"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="zipcode" class="text-gray-dark w-1/4">Code postal</label>
      <input id="zipcode" v-model="zipcode" class="input"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="city" class="text-gray-dark w-1/4">Ville</label>
      <input id="city" v-model="city" class="input"/>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <label for="country" class="text-gray-dark w-1/4">Pays</label>
      <input id="country" v-model="country" class="input"/>
    </div>
    <div class="flex flex-row px-4 py-3">
      <label for="creationDate" class="text-gray-dark w-1/4">Date de création</label>
      <input type="date" id="creationDate" v-model="creationDate" class="input"/>
    </div>
  </form>

  <div class="flex flex-row-reverse">
    <button
      type="submit"
      class="button button-primary"
    >
      Sauvegarder
    </button>
  </div>
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
