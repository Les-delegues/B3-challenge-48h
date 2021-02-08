<template>
  <div>
    <table class="border-collapse w-full">
    <thead>
        <tr>
            <th v-for="(column,idx) in columns" :key="idx" class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              {{ column.name }}
            </th>
          <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Actions
          </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, idx) in items" :key="idx" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td v-for="(column, idx) in columns" :key="idx" class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{{ column.name }}</span>
                {{ column.value ? column.value(item) : item[column.key] }}
            </td>
          <td class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <button class="button button-primary">Editer</button>
            <button class="button button-secondary">Supprimer</button>
          </td>
        </tr>
    </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'Datatable',
  props: ['items', 'columns'],
};
</script>

<style>

</style>
