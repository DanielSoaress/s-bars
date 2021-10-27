import { mapActions, mapGetters } from 'vuex';

const ClienteMixin = {
  data() {
    return {
      title: this.$route.name,
      route: this.$route.path,
      model: {
        nom_cliente: '',
        tel_cliente: '',
        end_cliente: '',
        niver_cliente: '',
        cashback_cliente: 0,
      },
    };
  },
  computed: {
    ...mapGetters('cliente', {
      datasource: 'datasource',
      pagination: 'pagination',
      loading: 'loading',
      success: 'success',
      error: 'error'
    })
  },

  methods: {
    ...mapActions('cliente', {
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

export default ClienteMixin;
