export default {
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    removeError(field) {
      this.errors = this.errors.filter(e => { return e.field != field });
    },
    // Retorna mensagem de erro
    getError(name) {
      let error = this.errors.find(e => e.field === name);
      if(error) {
        return error.msg;
      } 
    }
  },
  watch: {
    // Propriedade definida nos módulos do VUEX
    error: {
      handler(value) {
        if (value && value.errors) {
          Object.keys(value.errors).map((key) => {
            return this.errors.push({
              field: key,
              msg: value.errors[key][0]
            });
          });
        }
      }
    }
  }
};
