<template>
  <h1 class="text-2xl font-bold py-4 text-blue-brand font-mina">Les licenciés</h1>

  <Datatable :items="this.licensedUsers" :columns="this.columns" />
</template>

<script>
import Datatable from '@/components/Datatable.vue';

export default {
  components: { Datatable },
  data: () => ({
    licensedUsers: [],
    columns: [
      { key: 'email', name: 'Email' },
      {
        key: 'license.licenseNumber',
        name: 'Numéro de licence',
        value: (user) => (user.license ? user.license.licenseNumber : '-'),
      },
      { key: 'roles', name: 'Roles', value: (user) => user.roles.join(', ') },
    ],
  }),
  async mounted() {
    this.licensedUsers = this.$store.getters['user/licensedUsers'];
    let promises = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const user of this.licensedUsers) {
      promises.push(this.$store.dispatch('license/FIND_FOR_USER', user.id));
    }
    promises = await Promise.all(promises);

    this.licensedUsers = this.licensedUsers.map((user) => ({
      ...user,
      license: promises.find((license) => (license ? license.userId === user.id : null)),
    }));
  },
};
</script>

<style></style>
