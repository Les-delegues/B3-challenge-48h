<template>
  <form class="card mt-8">
      <div class="flex flex-row px-4 border-b border-gray-light py-3">
        <label for="email" class="text-gray-dark w-1/4">Email</label>
        <input id="email" v-model="email" class="input"/>
      </div>
      <div class="flex flex-row px-4 border-b border-gray-light py-3">
        <label for="password" class="text-gray-dark w-1/4">Mot de passe</label>
        <input id="password" type="password" v-model="password" class="input"/>
      </div>
      <button @click="handleLogin" class="button button-primary">Connexion</button>
  </form>
</template>

<script>
import axios from 'axios';
import { AuthenticatedUserActionTypes } from '@/store/modules/authenticatedUser/actions';

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    async handleLogin(event) {
      event.preventDefault();
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/users/login`, {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          await this.$store.dispatch(`authenticatedUser/${AuthenticatedUserActionTypes.SET_USER}`, { ...response.data, token: response.headers['x-token'] });
          await this.$router.push('accueil');
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>

</style>
