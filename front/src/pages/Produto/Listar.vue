<template>
    <div>
        <Form
          :title="$route.name"
          type="list"
          @pesquisar="pesquisar()"
          @limpar="limpar()">  
            <Input
                :cols="6"
                label="Código do Produto" 
                v-model="filters.cod_produto"
            />
            <Input
                :cols="6"
                label="Nome do Produto" 
                v-model="filters.nom_produto"
            />
        </Form>
        <DataTable
            :datasource="datasource"
            :columns="headers"
            :loading="loading"
            @editar="editar($event)"
            @deletar="deletar($event)"
            @onPagination="listar"
            :pagination="pagination"
            :filters="filters"
        />

    </div>
</template>

<script>
import ProdutoMixin from './ProdutoMixin';

export default {
    mixins: [ProdutoMixin],
    data: () => ({
      filters: {
          cod_produto: null,
          nom_produto: null
      },
      headers: [
        { text: 'Código', value: 'cod_produto' },
        { text: 'Nome', value: 'nom_produto' },
        { text: 'Valor', value: 'val_produto' },
        { text: '', value: 'actions', sortable: false },
      ],
    }),
    async created() {
        console.log(this.pagination)
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
                cod_produto: null,
                nom_produto: null
            };
            this.pesquisar();
        },
        editar(item) {
            this.$router.push(`${this.$route.fullPath}/editar/${item.cod_produto}`)
        },
        deletar(item) {
            console.log(item)
        }
    }
}
</script>