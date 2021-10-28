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
                v-model="filters.nom_func"
            />
            <Input
                :cols="4"
                label="Usuário" 
                v-model="filters.user"
            />
            <Input
                :cols="4"
                label="Telefone" 
                mask="(##) #####-####"
                v-model="filters.tel_func"
                type="number"
            />
            <Input
                :cols="6"
                label="Email" 
                v-model="filters.email"
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
import FuncionarioMixin from './FuncionarioMixin';

export default {
    mixins: [FuncionarioMixin],
    data: () => ({
      filters: {
          nom_func: null,
          tel_func: null,
          email: null,
          user: null,
      },
      headers: [
        { text: 'Nome', value: 'nom_func' },
        { text: 'Usuário', value: 'user' },
        { text: 'Telefone', value: 'tel_func' },
        { text: 'Email', value: 'email' },
        { text: 'Aniversário', value: 'niver_func' },
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
                nom_func: null,
                tel_func: null
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