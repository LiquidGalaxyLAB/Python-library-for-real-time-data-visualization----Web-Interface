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
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg',name: 'Torres', lon:11, lat:11},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg',name: 'Lleida', lon:11, lat:11},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},
        {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alcarr%C3%A0s_iglesia.jpg/225px-Alcarr%C3%A0s_iglesia.jpg' , name: 'alcarras', lon:10,lat:10},

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
