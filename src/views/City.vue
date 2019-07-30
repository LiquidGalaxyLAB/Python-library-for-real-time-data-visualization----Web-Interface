<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs12 >
            <v-card color="#e8eaff">
            <v-card-media :src="imageCity" height="200px">
            </v-card-media>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h3 class="headline mb-0 ">{{city}}</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs3 v-for="i in details">
            <v-card color="#fae2fe">
            <v-card-media :src="i.img" height="200px">
            </v-card-media>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h3 class="headline mb-0 ">{{i.name}}</h3>
                </div>
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn flat color="#0000db" @click="travelTo(i)">Go To ></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
  </v-layout>

<!--  <v-layout>
    <h1> {{message}} </h1>
  </v-layout> -->

    </v-container>
</template>


<script type="text/javascript">

import axios from 'axios'


const API_URL = "http://localhost:3000/"
  export default {
    name:'details',

    data: function(){
      return {
        city : '',
        imageCity:'',
        details: [
          {img:'https://i.ibb.co/5xRGwW5/homeless.png' , name: 'Homeless',role:'allhelpless', lon:0.5848295,lat:41.618337},
          {img:'https://i.ibb.co/948KGdK/shutterstock-2630522811-3-390x285.jpg',name: 'Donors',role:'donors', lon:2.169009,lat:41.378773},
          {img:'https://i.ibb.co/2h6Cb3C/Volunteer-Agift-to-the-community.png',name: 'Volunteers',role:'volunteers', lon: -73.996718,lat:40.672346},
          {img:'https://i.ibb.co/d7Jshnh/open-flash-chart-590x314.jpg',name: 'Transactions'}
        ],
        message: [],
      }
    },
    mounted(){

      var vm = this
      var urlApi = 'http://localhost:3000'
      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image

    },
    methods: {

        travelTo(details){
          var vm = this
    /*      console.log("details")
          var formData = new FormData()
          formData.append('id',details.userName)
          formData.append('name', details.userName)
          formData.append('longitude',details.lon)
          formData.append('latitude',details.lat)
          formData.append('range',0)
          console.log(formData) */
          vm.$router.push({ name: 'details' , params : { title:details.name, cityName:this.city, role: details.role, image:details.img }})

      /*    axios({
            headers: {
               'Access-Control-Allow-Origin': '*',
               "Access-Control-Allow-Headers": "*",
               "Access-Control-Allow-Methods":
               "GET, POST, PUT, DELETE, OPTIONS"
            },
            method: 'GET',
            url: urlApi,
            config: { headers: {'Content-Type': 'multipart/form-data' }}

          })
          .then(function (response) {
            //handle success
            console.log(response);
      //      vm.message = response.data;

          })
          .catch(function(err){
            console.log(err)
          })  */

      /*    axios({
            method: 'post',
            url: 'http://10.33.34.116:4567/kml/builder/addplacemark',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
           .then(function (response) {
            //handle success
            console.log(response)
            vm.$router.push({ name: 'details' , params : { homelessName: details.homelessName, city: details.cityName }})

          })
          .catch(function (response) {
            //handle error
            console.log("error",response);
          }); */
        }


      }
  }
</script>


<style media="screen">

</style
