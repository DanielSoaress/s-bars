import { mapActions, mapGetters } from 'vuex';

const FuncionarioMixin = {
  data() {
    return {
      title: this.$route.name,
      route: this.$route.path,
      model: {
        nom_func: '',
        tel_func: '',
        end_func: '',
        niver_func: '',
        user: '',
        password: '',
        email: '',
      },
    };
  },
  computed: {
    ...mapGetters('funcionario', {
      datasource: 'datasource',
      pagination: 'pagination',
      loading: 'loading',
      success: 'success',
      error: 'error'
    })
  },

  methods: {
    ...mapActions('funcionario', {
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

export default FuncionarioMixin;
