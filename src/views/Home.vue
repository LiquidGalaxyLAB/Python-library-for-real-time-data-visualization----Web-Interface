<template>
  <v-container grid-list-lg >
    <v-card
      class="mx-auto"
      color="#e8eaff"
      max-width=fill-height
    >

    <v-card-title class="justify-center">
      <span class="title font-weight-light align-center">A Google Summer Of Code 2019 Project</span>
    </v-card-title>
      <v-card-text class="headline font-weight">
      This application's main function is the realtime data visualization through the Liquid Galaxy screens.<br>
      </v-card-text>
    </v-card>
    </v-container>
</template>

<script>


//import navbar from '@/components/navbar.vue'
import axios from 'axios'


export default {
//  name: 'home',
//  components: {

  //  navbar
//  },
/*  data: function(){
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
  } */
}
</script>
