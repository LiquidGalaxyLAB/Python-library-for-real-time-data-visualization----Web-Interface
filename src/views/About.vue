<template>
  <v-container grid-list-lg >
    <v-card
      class="mx-auto"
      color="#6c83fe"
      dark
      max-width=fill-height
    >
      <v-card-title class="justify-center">
        <span class="title font-weight-light align-center">About us</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        This web application was implemented as a Google Summer Of Code 2019 project and it's main function is the real time data visualization. The data can be visualized on the Liquid Galaxy screns.<br><br>
        The persons below helped me in this process by giving me support every moment.
      </v-card-text>

      <v-card-actions>
        <v-list-tile class="grow"  v-for="i in team">
          <v-list-tile-avatar color="grey darken-3">
            <v-img :src="i.img"
              class="elevation-6"
            ></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{i.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-card-actions>
    </v-card>
    </v-container>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  },
  data: function() {
    return {
      team: [
        {img:'https://i.ibb.co/4SzYsWy/Screenshot-from-2019-07-22-21-06-38.png' , name: 'Nerea Serrano'},
        {img:'https://i.ibb.co/KjsPb5C/Screenshot-from-2019-07-22-21-06-38-2.png',name: 'Roger Artero'},
        {img:'https://i.ibb.co/Ph6sSYq/Screenshot-from-2019-07-22-21-28-06.png',name: 'Francesc Tuset'}
        ]
    }

  },
}
</script>
