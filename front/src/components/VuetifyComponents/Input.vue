<template>
    <v-col :cols="cols">
        <v-text-field
            v-model="model"
            :label="label"
        ></v-text-field>  
    </v-col>    
</template>

<script>
export default {
    name: 'Input',
    props: {
      label: String,
      cols: Number,
      value: {
        default: '',
      },
    } ,
    data() {
        return {
            model: '',
        };
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