<template>
    <v-card class="px-5 py-5 mt-5">
        <v-form>
            <v-row
            justify="space-between"
            >
                <h2 class="ml-3 mt-2 mb-2">{{ title }}</h2>
                <template v-if="type == 'list'">
                    <Button 
                        :route="adicionar"
                        color="indigo"
                        icon="mdi-plus"
                        text="Adicionar"
                        class-custom="mr-2 mt-2 ml-auto"
                    /> 
                </template>
                <slot name="top"></slot>        
            </v-row>
            <v-row class="px-3">
                <slot></slot>
            </v-row>
            <v-row>
                <template v-if="type == 'list'">
                    <Button 
                        @click="pesquisar"                 
                        color="secondary"
                        icon="mdi-magnify"
                        text="Pesquisar"
                        class-custom="ma-2"
                    /> 
                    <Button 
                        @click="limpar"                 
                        color="blue-grey"
                        icon="mdi-eraser"
                        text="Limpar"
                        class-custom="ma-2 white--text"
                    />  
                </template>      
                <template v-if="type == 'form'">
                    <Button 
                        @click="voltar"
                        color="secondary"
                        icon="mdi-keyboard-backspace"
                        text="Voltar"
                        :outlined='true'
                        class-custom="ma-2"
                        :disabled="loading"
                    /> 
                    <Button 
                        @click="salvar"                    
                        color="info"
                        icon="mdi-content-save"
                        text="Salvar"
                        class-custom="ma-2"
                        :loading="loading"
                    />  
                </template>   
            </v-row>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'Form',
    props: {
      title: String,
      route: String,
      loading: {
        type: Boolean,
        default: false          
      },
      //Se é o Form de Listagem
      type: {
        type: String,
        default: 'list'          
      },
    },
    data() {
        return {
            valid: false,
        };
    },
    computed: {
        adicionar: function () {
            return this.$route.fullPath + '/adicionar' 
        },
    },
    methods: {
        voltar: function () {
            this.$router.go(-1)
        },
        salvar: function () {
           this.$emit('cadastrar');
        },
        limpar: function () {
            this.$emit('limpar');
        },
        pesquisar: function () {
            this.$emit('pesquisar');
        }                     
    }
}
</script>

<style scoped>


</style>