<template>
  <nav class="bg-blue-brand w-56 fixed flex flex-col min-h-screen text-white py-4 px-4">
    <section>
      <ul>
        <li>
          <router-link to="/" exact class="opacity-80" active-class="opacity-100 font-bold">Tableau de bord</router-link>
        </li>
      </ul>
      <h4 class="uppercase mt-3 opacity-80">Association</h4>
      <ul>
        <li class="px-4">
          <router-link to="/informations" exact class="opacity-80" active-class="opacity-100 font-bold">Informations</router-link>
        </li>
        <li class="px-4">
          <router-link to="/documents" exact class="opacity-80" active-class="opacity-100 font-bold">Documents</router-link>
        </li>
        <li class="px-4">
          <router-link to="/calendrier" exact class="opacity-80" active-class="opacity-100 font-bold">Calendrier des aides</router-link>
        </li>
      </ul>
      <h4 class="uppercase mt-3 opacity-80">Mes modules</h4>
      <ul>
        <li class="px-4">
          <router-link to="/licencees" exact class="opacity-80" active-class="opacity-100 font-bold">Les licenciés</router-link>
        </li>
        <li class="px-4">
          <router-link to="/matchs" exact class="opacity-80" active-class="opacity-100 font-bold">Les matchs</router-link>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'Sidenav',
};
</script>
