<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GSoc2019   </span>
        <span class="font-weight-light"> Python library for real time data visualization</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container align-center>
        <navbar/>
    </v-container>
    </v-content>
    <router-view></router-view>
  </v-app>
</template>

<script>

import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
