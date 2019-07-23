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
                <v-btn  flat color="#0000db" @click="travelTo(i.lon, i.lat)">Go To ></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
  </v-layout>
    </v-container>
</template>


<script type="text/javascript">
  export default {
    name:'details',

    data: function(){
      return {
        city : '',
        imageCity:'',
        details: [
          {img:'https://i.ibb.co/5xRGwW5/homeless.png' , name: 'Homeless'},
          {img:'https://i.ibb.co/948KGdK/shutterstock-2630522811-3-390x285.jpg',name: 'Donors'},
          {img:'https://i.ibb.co/2h6Cb3C/Volunteer-Agift-to-the-community.png',name: 'Volunteers'},
          {img:'https://i.ibb.co/d7Jshnh/open-flash-chart-590x314.jpg',name: 'Statistics&Transactions'}
          ]
      }
    },
    mounted(){
      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image

    }
  }
</script>


<style media="screen">

</style>
