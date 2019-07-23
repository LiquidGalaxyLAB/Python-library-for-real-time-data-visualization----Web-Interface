<template>

<v-container grid-list-lg >
    <v-layout row wrap>
        <v-flex xs4 v-for="i in city">
          <v-card hover="true" color="#e8eaff">
            <v-card-media :src="i.img" height="200px">
            </v-card-media>
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 class="headline mb-0 ">{{i.name}}</h3>
                <div>{{i.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn to="" flat color="#0000db" @click="travelTo(i.lon, i.lat)">Go To ></v-btn>
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
        {img:'https://i.ibb.co/qFtLd56/lleida.jpg' , name: 'Lleida', lon:0.6419,lat:41.6109, description:'Is a city in the west of Catalonia, Spain. It is the capital city of the province of Lleida, with a populayion of 137,387 inhabitants in 2016. ' },
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
