<template>
  <nav
    class="bg-blue-brand w-56 fixed flex flex-col min-h-screen text-white py-4 px-4 font-mina z-40 pt-24"
  >
    <section>
      <ul>
        <li>
          <router-link
            to="/accueil"
            exact
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Tableau de bord</router-link
          >
        </li>
      </ul>
      <h4 class="uppercase mt-3 opacity-80 font-bold">Association</h4>
      <ul>
        <li class="px-4">
          <router-link
            to="/informations"
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Informations</router-link
          >
        </li>
        <li class="px-4">
          <router-link
            to="/documents"
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Documents</router-link
          >
        </li>
        <li class="px-4">
          <router-link
            to="/calendar"
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Calendrier des aides</router-link
          >
        </li>
      </ul>
      <h4 class="uppercase mt-3 opacity-80 font-bold">Mes modules</h4>
      <ul>
        <li class="px-4">
          <router-link
            to="/licensees"
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Les licenciés</router-link
          >
        </li>
        <li class="px-4">
          <router-link
            to="/matchs"
            class="opacity-80 hover:opacity-100"
            active-class="opacity-100 font-bold"
            >Les matchs</router-link
          >
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
