<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-4 font-mina">Informations de l'association CCBA</h1>
  </div>

  <form @submit.prevent="submitForm">
    <section class="border border-gray-brand w-full rounded-lg shadow-md">
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="name" class="text-gray-dark w-1/4">Nom</label>
        <input id="name" v-model="associationInfos.name" type="text" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="acronym" class="text-gray-dark w-1/4">Acronyme</label>
        <input id="acronym" v-model="associationInfos.acronym" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="object" class="text-gray-dark w-1/4">Objet</label>
        <input id="object" v-model="associationInfos.object" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="address1" class="text-gray-dark w-1/4">Adresse ligne 1</label>
        <input id="address1" v-model="associationInfos.addressLine1" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="address2" class="text-gray-dark w-1/4">Adresse ligne 2</label>
        <input id="address2" v-model="associationInfos.addressLine2" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="zipcode" class="text-gray-dark w-1/4">Code postal</label>
        <input id="zipcode" v-model="associationInfos.zipCode" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="city" class="text-gray-dark w-1/4">Ville</label>
        <input id="city" v-model="associationInfos.city" class="input" />
      </div>
      <div class="flex items-center px-4 border-b border-gray-light py-3">
        <label for="country" class="text-gray-dark w-1/4">Pays</label>
        <input id="country" v-model="associationInfos.country" class="input" />
      </div>
      <div class="flex items-center px-4 py-3">
        <label for="creationDate" class="text-gray-dark w-1/4">Date de création</label>
        <input
          type="date"
          id="creationDate"
          v-model="associationInfos.creationDate"
          class="input"
        />
      </div>
    </section>

    <div class="flex flex-row-reverse mt-4">
      <button type="submit" class="button button-primary">Sauvegarder</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditInformations',
  data: () => ({
    associationInfosForm: {
      name: null,
      acronym: null,
      object: null,
      addressLine1: null,
      addressLine2: null,
      zipCode: null,
      city: null,
      country: null,
      creationDate: null,
    },
  }),
  computed: {
    associationInfos() {
      return this.$store.getters['associationInfos/associationInfos'];
    },
  },
  created() {
    this.associationInfosForm = { ...this.associationInfos };
  },
  methods: {
    async submitForm() {
      console.log('hey');
      console.log(this.associationInfosForm.name);
      await this.$store.dispatch(
        'associationInfos/SET_ASSOCIATION_INFOS',
        this.associationInfosForm
      );
      this.$router.push({ name: 'INFORMATIONS' });
    },
  },
};
</script>
