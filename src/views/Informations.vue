<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 text-blue-brand">Informations de l'association CCBA</h1>
    <edit-button link="/informations/edition" />
  </div>

  <section class="card">
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
