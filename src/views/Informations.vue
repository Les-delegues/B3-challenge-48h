<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 text-blue-brand">Informations de l'association CCBA</h1>
    <router-link to="/informations/edition" class="bg-gray-brand p-2 rounded-lg">
      <svg class="h-6 w-6 text-gray-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </router-link>
  </div>

  <section class="border border-gray-brand w-full rounded-lg shadow-md">
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Nom</span>
      <span class="text-blue-brand">Club de Canne et Baton d'Aquitaine</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Acronyme</span>
      <span class="text-blue-brand">CCBA</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Objet</span>
      <span class="text-blue-brand">Association de sport</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Adresse ligne 1</span>
      <span class="text-blue-brand">Adresse 1</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Adresse ligne 2</span>
      <span class="text-blue-brand">Comp.</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Code postal</span>
      <span class="text-blue-brand">33000</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Ville</span>
      <span class="text-blue-brand">Bordeaux</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Pays</span>
      <span class="text-blue-brand">France</span>
    </div>
    <div class="flex flex-row px-4 py-3">
      <span class="text-gray-dark w-1/4">Date de création</span>
      <span class="text-blue-brand">2004-01-12</span>
    </div>
  </section>
</template>
