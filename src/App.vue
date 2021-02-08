<template>
  <Header />
  <Sidenav />
  <!--  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <main class="pl-64">
    <router-view/>
  </main>
</template>
<script>
import Header from '@/components/Header.vue';
import Sidenav from '@/components/Sidenav.vue';

export default {
  components: { Sidenav, Header },
};
</script>
