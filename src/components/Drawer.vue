<template>
    <div>
      <v-toolbar class="deep-purple" />
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-divider dark v-if="item.divider" :key="i"></v-divider>
          <v-list-item ripple :to="item.action" :key="item.action" v-else>
            <v-list-item-action>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </template>
  
  <script>
  export default {
    name: 'drawerDgdbrthn',
    data: function () {
      return {
        items: [
          { icon: 'home', text: this.$t('drawer.home'), action: '/' },
          { icon: 'history', text: this.$t('drawer.history'), action: '/history' },
          { icon: 'help', text: this.$t('drawer.about'), action: '/about' },
          { icon: 'history', text: this.$t('drawer.manualhistory'), action: '/manualhistory' },
          { icon: 'email', text: this.$t('drawer.contact'), action: '/contact' },
          { icon: 'account-group', text: this.$t('drawer.testimonials'), action: '/testimonials' },
        ]
      }
    }
  }
  </script>