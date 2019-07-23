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
                <v-btn  flat color="#0000db" @click="travelTo(i.city)">Go To ></v-btn>
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
          {img:'https://i.ibb.co/d7Jshnh/open-flash-chart-590x314.jpg',name: 'Transactions'}
          ]
      }
    },
    mounted(){
      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image

    },
    methods: {
      addPlacemark(){
      var vm = this
      var bodyFormData = new FormData()
      Object.keys(vm.placemark).forEach(function(key){
        bodyFormData.append(key,vm.placemark[key]);
      })
      axios({
        method: 'post',
        url: 'http://www.localhost:8080/kml/builder/addplacemark',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log("error",response);
      });
      },

    }
  }
</script>


<style media="screen">

</style>
