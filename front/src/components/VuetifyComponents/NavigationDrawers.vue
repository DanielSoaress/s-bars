<template>
      <v-navigation-drawer
        permanent
        expand-on-hover
        class="aside mr-2"
      >
        <v-list>
          <v-list-item >
            <v-list-item-avatar>
              <v-img :src="user.img"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <router-link class="router-link" :to="link.fullPath"  v-for="link in menuLink" :key="link.name">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="title">{{ link.name }}</v-list-item-title>
          </v-list-item>
        </router-link>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavigationDrawers',
    props: {
      user: Object,
      menuLink: Array
    }
  }
</script>

<style scoped>

.title {
    font-weight: 600!important;
    font-size: .8125rem!important;
    color: rgba(0,0,0,.67)!important;
}

.v-list-item {
    padding: 0 8px;
}

.aside {
    display: inline-flex;
    position: absolute;
    z-index: 5;
}

.router-link {
    text-decoration: none;
}
</style>