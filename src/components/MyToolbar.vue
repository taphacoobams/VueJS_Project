<template>
    <div>
      <v-navigation-drawer v-model="drawer" clipped fixed app>
        <myContentDrawer />
      </v-navigation-drawer>
      <v-app-bar dark color="indigo lighten-2" clipped-left app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
      </v-app-bar>
    </div>
  </template>x
  
  <script >
  import myContentDrawer from "@/components/Drawer" // <== Ajouter l’import

  export default {
    name: 'myToolbar',
    components: {myContentDrawer}, // <== Ajouter la déclaration du composant
    data: function () {
      return {
        drawer: false
      }
    },
    methods: {
      goHome () {
        this.$router.replace('/')
      }
    }
  }
  </script>