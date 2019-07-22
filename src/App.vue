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
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="#fae2fe">
          <v-card-title primary-title class="justify-center">
              <h3 class="headline mb-0 ">Main logo and Partners</h3>
          </v-card-title>
          <v-card-media src="https://i.ibb.co/dP6Z0wN/logos.png">
     </v-card-media>
        </v-card>
      </v-flex>
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
