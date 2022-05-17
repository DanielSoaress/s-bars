<template>
  <v-row class="mt-4">
    <v-col cols="12">
      <v-data-table
        :headers="columns"
        :items="datasource"
        :items-per-page="pagination.per_page"
        class="elevation-1"
        :loading="loading"
        loading-text="Carregando... Por favor aguarde"
        hide-default-footer
        @update:options="changeSort"
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
        <template
          v-slot:footer
        >
       <div class="text-center pt-2">
         <v-row>
           <v-col
            cols="2"
            class="text-left d-flex">
              <v-chip
                class="ma-2"
                color="primary"
              >
                {{ initialPage }} - {{ lastPage }}
              </v-chip>
              <p class="mt-3">de </p>
              <v-chip
                class="ma-2"
                color="primary"
              >
                {{ pagination.total }}
              </v-chip>
           </v-col>
           <v-col>
              <v-pagination
                :length="length"
                circle
                :value="pagination.current_page"
                @input="changePagination"
              ></v-pagination>
           </v-col>
           <v-col
            cols="2">
              <div class="select-per-page">
                <v-select
                  :value="pagination.per_page"
                  :items="per_page.items"
                  @input="changePerPage"
                  label="Registros Por Página"
                  solo
                ></v-select>
              </div>  
           </v-col>
         </v-row>
       </div>
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
      datasource: Array,
      pagination: Object,
      filters: Object,
      loading: {
        type: Boolean,
        default: false          
      },
    },
    data: () => ({
      current_page: null,
      per_page: {
        value: null,
        items: [5, 10, 15]
      },
      sort: null,
      order: null,
    }),
    computed: {
      length() {
        return Math.ceil(this.pagination.total/this.pagination.per_page)
      },
      lastPage() {
        let last_page = this.pagination.per_page * this.pagination.current_page;
        if(last_page > this.pagination.total) {
          return this.pagination.total;
        }
        return last_page;
      },
      initialPage() {
        if(this.pagination.total == 0) {
          return 0;
        }
        return this.pagination.per_page * this.pagination.current_page - (this.pagination.per_page - 1);
      }
    },
    methods: {
      onPagination(data) {
        return this.$emit('onPagination', data);
      },
      changePagination(current_page) {
        this.current_page = current_page;
        this.onPagination({ ...this.pagination, filters: this.filters, current_page });
      },
      changePerPage(per_page) {
        this.per_page.value = per_page;
        let current_page = 1;
        this.current_page = current_page;
        this.onPagination({ ...this.pagination, filters: this.filters, per_page, current_page });
      },
      changeSort(options) {
        this.sort = options.sortBy[0];
        this.order = options.sortDesc[0] ? 'desc' : 'asc';
      },
      editar(item) {
        this.$emit('editar', item);
      },
      deletar(item) {
        this.$emit('deletar', item);
      },
    }
  }
</script>

<style>
  .select-per-page .v-text-field.v-text-field--solo .v-input__control {
    max-width: 75px!important;
    margin-left: auto;
  }

  .select-per-page .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }
</style>