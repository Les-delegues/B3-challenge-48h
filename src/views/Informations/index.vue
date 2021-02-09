<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 font-mina">Informations de l'association CCBA</h1>
    <edit-button link="/informations/edit" />
  </div>

  <section class="card">
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Nom</span>
      <span>{{ associationInfos.name }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Acronyme</span>
      <span>{{ associationInfos.acronym }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Objet</span>
      <span>{{ associationInfos.object }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Adresse ligne 1</span>
      <span>{{ associationInfos.addressLine1 }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Adresse ligne 2</span>
      <span>{{ associationInfos.addressLine2 ?? '-' }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Code postal</span>
      <span>{{ associationInfos.zipCode }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Ville</span>
      <span>{{ associationInfos.city }}</span>
    </div>
    <div class="flex flex-row px-4 border-b border-gray-light py-3">
      <span class="text-gray-dark w-1/4">Pays</span>
      <span>{{ associationInfos.country }}</span>
    </div>
    <div class="flex flex-row px-4 py-3">
      <span class="text-gray-dark w-1/4">Date de création</span>
      <span>{{
        associationInfos.creationDate.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}</span>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    associationInfos() {
      return this.$store.getters['associationInfos/associationInfos'];
    },
  },
};
</script>
