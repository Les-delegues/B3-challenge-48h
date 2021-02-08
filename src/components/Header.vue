<template>
    <header class="bg-white shadow lg:static lg:overflow-y-visible">
      <div class="max-w-7xl px-4 py-3">
        <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div class="flex md:absolute md:left-0 mdc:inset-y-0 lg:static xl:col-span-2">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/">
                <div class="flex inline-flex items-center">
                <img class="block h-12 w-12" src="../assets/logo.png" alt="CCBA">
                  <h1 class="pl-4 font-bold text-blue-brand">CCBA - HelloPlatform</h1>
                </div>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
