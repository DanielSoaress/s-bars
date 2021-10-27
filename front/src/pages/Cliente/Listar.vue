<template>
    <div>
        <Form
          :title="$route.name"
          type="list"
          @pesquisar="pesquisar()"
          @limpar="limpar()">  
            <Input
                :cols="4"
                label="Nome" 
                v-model="filters.nom_cliente"
            />
            <Input
                :cols="4"
                label="Telefone" 
                mask="(##) #####-####"
                v-model="filters.tel_cliente"
                type="number"
            />
        </Form>
        <DataTable
            :datasource="datasource"
            :columns="headers"
            :loading="loading"
            @editar="editar"
            @deletar="deletar"
            @onPagination="listar"
            :pagination="pagination"
            :filters="filters"
        />

    </div>
</template>

<script>
import ClienteMixin from './ClienteMixin';

export default {
    mixins: [ClienteMixin],
    data: () => ({
      filters: {
          nom_cliente: null,
          tel_cliente: null
      },
      headers: [
        { text: 'Nome', value: 'nom_cliente' },
        { text: 'Telefone', value: 'tel_cliente' },
        { text: 'Cashback', value: 'cashback_cliente' },
        { text: 'Aniversário', value: 'niver_cliente' },
        { text: '', value: 'actions', sortable: false },
      ],
    }),
    async created() {
        this.listar();
    },
    methods: {
        async pesquisar() {
            await this.listar({
                ...this.pagination,
                filters: this.filters,
                current_page: 1,
            });
        },
        limpar() {
            this.filters = {
                nom_cliente: null,
                tel_cliente: null
            };
            this.pesquisar();
        },
        editar(item) {
            this.$router.push(`${this.$route.fullPath}/editar/${item.id}`)
        },
        async deletar(item) {
            await this.excluir(item.id);
            if(this.success) {
                this.pesquisar();
            }
        }
    }
}
</script>