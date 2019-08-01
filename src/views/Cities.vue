<template>

<v-container grid-list-lg >
    <v-layout row wrap>
        <v-flex xs4 v-for="i in city" v-bind:key="i.name">
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
            <v-btn flat color="#0000db" @click="travelTo(i)">Go To ></v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'
const ERIC_API = "http://10.33.34.109:8080/"

export default {
  name: 'cities',

  data: function() {
    return {
      city: [
        {img:'https://i.ibb.co/qFtLd56/lleida.jpg' , name: 'Lleida', lon:0.6419,lat:41.6109,range:22000, description:'Is a city in the west of Catalonia, Spain. It is the capital city of the province of Lleida, with a populayion of 137,387 inhabitants in 2016. ' },
        {img:'https://i.ibb.co/zhwqZP4/barcelona.jpg',name: 'Barcelona', lon:2.154007, lat:41.390205,range:30000, description:'It is the capital and largest city of the autonomous community of Catalonia, with a population of 1.6 million within city limits.'},
        {img:'https://i.ibb.co/LrK5xD4/newyork.jpg',name: 'New York', lon:-73.935242, lat:40.730610,range:183000, description:' The City of New York, is the most populous city in the United States,with an estimated 2018 population of 8,398,748.'}
        ]
    }
//    /kml/manage/clean
//    /kml/flyto/:longitude/:latitude/:range

  },
  methods: {
    travelTo(city){
      var vm = this
      console.log("cities")
  /*    var formData = new FormData()
      formData.append('id',city.name)
      formData.append('name',city.name)
      formData.append('longitude',city.lon)
      formData.append('latitude',city.lat)
      formData.append('range',0)
      console.log(formData) */
    //  console.log('city:',city.name)
      console.log('longitude:',city.lon)
      console.log('latitude:',city.lat)
      vm.$router.push({ name: 'city' , params : { cityName:city.name, image: city.img }})

      axios({
        method: 'get',
        url: ERIC_API + 'kml/flyto/'+ city.lon + '/' + city.lat + '/' + city.range
    //    data: formData,
    //    config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
       .then(function (response) {
        //handle success
        console.log("cities Send")
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
