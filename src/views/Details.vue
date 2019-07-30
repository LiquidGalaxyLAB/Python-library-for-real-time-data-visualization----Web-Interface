<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs12 >
            <v-card color="#e8eaff">
            <v-card-media :src="image" height="200px">
            </v-card-media>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h3 class="headline mb-0 ">{{title}}</h3>
                </div>
                <v-spacer> </v-spacer>
                <div>
                  <h3 class="headline mb-0 ">{{city}}</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
  </v-layout>

  <v-layout>

  </v-layout>

  <table class="table table-striped table-borders">
    <tr>
      <th>Location</th>
      <th>City</th>
    </tr>

  <thead>
  </thead>
  <tbody>
    <tr v-for="k in Info">
      <td>{{k.Location}}</td>
      <td>{{k.city}}</td>
      <td>{{k.FirstName}}</td>
    </tr>
  </tbody>
</table>
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
      image:'',
      details: '',
      message: [],
      role:'',
      title:'',
      Info:[]
    }
  },

mounted(){

  var vm = this
  var location
  this.image = this.$route.params.image,
  this.city = this.$route.params.cityName,
  this.role = this.$route.params.role,
  this.title = this.$route.params.title
  var urlApi = API_URL + this.role + '/' + this.city

//  vm.message = urlApi

  axios.get(urlApi)
    .then(function (response){
      console.log(response.data);
      vm.Info = response.data

    });

}
}

</script>
