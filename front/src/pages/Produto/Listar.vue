<template>
    <div>
        <Form
          :title="$route.name"
          type="list">  
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
            @editar="editar($event)"
            @deletar="deletar($event)"
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
        this.listar();
    },
    methods: {
        editar(item) {
            this.$router.push(`${this.$route.fullPath}/editar/${item.cod_produto}`)
        },
        deletar(item) {
            console.log(item)
        }
    }
}
</script>