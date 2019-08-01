<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GSoc2019   </span>
        <span class="font-weight-light"> Python library for real time data visualization</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  flat color="#33cc00" @click="cleanKml()">clean KMLs</v-btn>
    </v-toolbar>

    <v-content>
      <v-container align-center>
        <navbar/>
    </v-container>
    </v-content>
    <router-view></router-view>
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="#FAFAFA">
          <v-card-title primary-title class="justify-center">
              <h3 class="headline mb-0 ">Main logo and Partners</h3>
          </v-card-title>
          <v-card-media src="https://i.ibb.co/zGdBvdz/logos-claudia-2.png">
     </v-card-media>
        </v-card>
      </v-flex>
  </v-app>
</template>

<script>

import navbar from './components/navbar'
import axios from 'axios'
//const ERIC_API = "http://192.168.86.30:8112/"

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }
  },
  methods: {
    cleanKml(){
      //clean kmls mthod
      axios({
        method: 'get',
        url: process.env.VUE_APP_KML_API_URL + 'kml/manage/clean',
     //   data: formData,
     //   config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
       .then(function (response) {
        //handle success
        console.log("clean details")
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log("error",response);
      });
    }

  }
}

</script>
