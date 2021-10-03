<template>
    <v-card class="px-5 py-5 mt-5">
        <v-row
          justify="space-between"
        >
            <h2 class="ml-3 mt-2 mb-2">{{ title }}</h2>
            <v-btn
                color="indigo"
                dark
                class="mr-2 mt-2 ml-auto"
            >
                <v-icon
                    left
                    dark
                >
                    mdi-plus  
                </v-icon>
                Adicionar
            </v-btn>            
        </v-row>
        <v-row class="px-3">
            <slot></slot>
        </v-row>
        <v-row>
            <v-btn
            color="secondary"
            class="ma-2"
            >
                <v-icon
                    left
                    dark
                >
                    mdi-magnify  
                </v-icon>
                Pesquisar
            </v-btn>   
            <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            >
                <v-icon
                    left
                    dark
                >
                    mdi-eraser 
                </v-icon>
                Limpar
            </v-btn>          
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'Form',
    props: {
      title: String,
    }

}
</script>

<style scoped>


</style>