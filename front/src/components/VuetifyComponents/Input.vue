<template>
    <v-col :cols="cols">
        <v-text-field
            :id="id"
            :name="name"
            v-model="model"
            :label="label"
            :rules="rules"
            :error-messages="error"
            @input="changeError()"
        ></v-text-field> 
    </v-col>    
</template>

<script>
export default {
    name: 'Input',
    props: {
      label: String,
      cols: Number,
      rules: Array,
      id: String,
      name: {
        type: String,
      },
      value: {
        default: '',
      },
      error: {
        type: String,
        required: false,
      },
    },
    data() {
        return {
            model: '',
        };
    },
    methods: {
      changeError() {
        this.$emit('changeError', this.name);
      },
    },
    watch: {
        value(value) {
            this.model = value;
        },
        model(value) {
            this.$emit('input', value);
        },
    },
    mounted() {
        this.model = this.value;
    },  
}
</script>

<style  scoped>

</style>