<template>
  <v-row class="mt-4">
    <v-col cols="12">
      <v-data-table
        :headers="columns"
        :items="datasource"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editar(item)"
            >
              mdi-pencil
            </v-icon>
          <v-icon
            small
            @click="deletar(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'DataTable',
    props: {
      columns: Array,
      datasource: Array
    },
    data: () => ({
    }),
    methods: {
      editar(item) {
        this.$emit('editar', item);
      },
      deletar(item) {
        this.$emit('deletar', item);
      }
    }
  }
</script>