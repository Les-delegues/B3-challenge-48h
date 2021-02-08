<template>
  <nav class="bg-blue-brand w-56 fixed flex flex-col min-h-screen text-white py-4 px-4">
    <section class="opacity-80">
      <ul>
        <li>
          <router-link to="/" exact active-class="opacity-100 font-bold">Tableau de bord</router-link>
        </li>
      </ul>
      <h4 class="uppercase mt-3">Association</h4>
      <ul>
        <li class="px-4">Informations</li>
        <li class="px-4">Documents</li>
        <li class="px-4">Calendrier des aides</li>
      </ul>
      <h4 class="uppercase mt-3">Mes modules</h4>
      <ul>
        <li class="px-4">Les licenciés</li>
        <li class="px-4">Les matchs</li>
      </ul>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'Sidenav',
};
</script>
