<template>
  <v-app id="app">
    <v-main>
        <v-row>
          <v-col cols='1'> 
            <navigation-drawers :user="user" :menu-link="sidebar_links"></navigation-drawers>
          </v-col>
          <v-col cols='10'> 
            <notifications position="top right"/>
            <router-view></router-view>                    
          </v-col>
        </v-row>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from './sidebarLinks.js';

export default {
  name: 'App',
  data: function() {
    return {
      user: {
        img: 'https://avatars.githubusercontent.com/u/27651005?s=400&u=88fb0f9c96835527e0eb836d18b25bed82c79372&v=4',
        name: 'Daniel Soares Francelino',
        email: 'danielsoaresf@hotmail.com'
      },
    }
  },
  computed: {
    sidebar_links: function () {
      return sidebar();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}

</style>
