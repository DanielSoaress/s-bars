import { mapActions, mapGetters } from 'vuex';

const ProdutoMixin = {
  data() {
    return {
      title: this.$route.name,
      route: this.$route.path,
      model: {
        nom_produto: null,
        cod_produto: null,
        val_produto: null,
        des_produto: null
      },
    };
  },
  computed: {
    ...mapGetters('produto', {
      datasource: 'datasource',
      pagination: 'pagination',
      loading: 'loading',
      success: 'success',
      error: 'error'
    })
  },

  methods: {
    ...mapActions('produto', {
      listar: 'listar',
      cadastrar: 'cadastrar',
      atualizar: 'atualizar',
      exibir: 'exibir',
      excluir: 'excluir',
    })
  },
  async created() {
    if (this.$route.params.id) {
      this.model = await this.exibir(this.$route.params.id);
    }
  }
};

export default ProdutoMixin;
