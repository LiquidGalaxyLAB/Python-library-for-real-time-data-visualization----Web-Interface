<template>
  <v-layout row wrap align-center >
      <v-flex xs12 sm3 md4 lg2 v-for="volunteer in volunteers">
        <v-card>
          <v-card-media :src="volunteer.img" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ volunteer._id }} {{  volunteer.username}}</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Travel</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>


import navbar from '@/components/navbar.vue'
import axios from 'axios'


export default {
  name: 'home',
  components: {

    navbar
  },
  data: function(){
    volunteers : []
  },
  mounted(){
    var vm = this
    axios({
      method: 'get',
      url: 'http://localhost:3000/volunteers',
    })
    .then(function (response) {
        //handle success
        console.log(response.data)
        vm.volunteers = response.data
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }
}
</script>
