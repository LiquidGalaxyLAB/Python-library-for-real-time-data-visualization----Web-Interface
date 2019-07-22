<template>

    <v-layout row wrap align-center >
        <v-flex xs12 sm3 md4 lg2 v-for="i in city">
          <v-card>
            <v-card-media :src="i.img" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{i.name}}</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" @click="travelTo(i.lon, i.lat)">Travel</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
        {img:'https://i.ibb.co/zhwqZP4/barcelona.jpg',name: 'Barcelona', lon:11, lat:11},
        {img:'https://i.ibb.co/LrK5xD4/newyork.jpg',name: 'New York', lon:11, lat:11},

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
