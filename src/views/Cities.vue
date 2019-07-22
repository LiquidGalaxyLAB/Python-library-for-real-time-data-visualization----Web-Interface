<template>

<v-container grid-list-lg >
    <v-layout row wrap>
        <v-flex xs4 v-for="i in city">
          <v-card hover="true">
            <v-card-media :src="i.img" height="200px">
            </v-card-media>
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 class="headline mb-0 ">{{i.name}}</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn flat color="orange" @click="travelTo(i.lon, i.lat)">Travel</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Cities from '@/views/Cities.vue'
import navbar from '@/components/navbar.vue'
import axios from 'axios'
export default {
  name: 'cities',
  components: {
    Cities
  },
  data: function() {
    return {
      city: [
        {img:'https://i.ibb.co/qFtLd56/lleida.jpg' , name: 'Lleida', lon:0.6419,lat:41.6109 },
        {img:'https://i.ibb.co/zhwqZP4/barcelona.jpg',name: 'Barcelona', lon:2.154007, lat:41.390205},
        {img:'https://i.ibb.co/LrK5xD4/newyork.jpg',name: 'New York', lon:-73.935242, lat:40.730610}
        ]
    }

  },
  methods: {
    travelTo(lon,lat){
      var formData = new FormData()
      formData.append('longitude',lon)
      formData.append('latitude',lat)
      axios({
        method: 'get',
        url: 'http:// ip :8080/flyto',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    }
  }
}
</script>
