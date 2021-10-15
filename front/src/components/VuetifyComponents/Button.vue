<template>
  <div>
    <router-link 
      class="router-link" 
      :to="route" 
      v-if="route != ''"
     >
      <v-btn
        :color="color"
        dark
        :outlined="outlined"
        :class="classCustom"
        @click="event"
        :loading="loading"
      >
        <v-icon
          :left="left"
          :dark="dark"
        >
          {{ icon }}  
        </v-icon>
          {{ text }}
      </v-btn>
    </router-link>
    <v-btn
      v-if="route == ''"
      :color="color"
      dark
      :outlined="outlined"
      :class="classCustom"
      @click="event"
      :loading="loading"
    >
      <v-icon
        :left="left"
        :dark="dark"
      >
        {{ icon }}  
      </v-icon>
        {{ text }}
    </v-btn> 
  </div>  
</template>

<script>
export default {
    name: 'Button',
    props: {
      text: String,
      icon: String,
      color: String,
      classCustom: String,
      loading: {
        type: Boolean,
        default: false          
      },
      disabled: {
        type: Boolean,
        default: false          
      },
      //Ícone no lado esquerdo
      route: {
        type: String,
        default: ''          
      },
      //Ícone no lado esquerdo
      left: {
        type: Boolean,
        default: true          
      },
      //Cor do Texto
      dark: {
        type: Boolean,
        default: true          
      },
      //Se o Botão tem Borda
      outlined: {
        type: Boolean,
        default: false          
      },

    },
    methods: {
      event() {
        this.$emit('click')
      }
    }   

}
</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>