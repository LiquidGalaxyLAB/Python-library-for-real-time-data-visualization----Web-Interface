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


<!--  <table class="table table-striped table-borders">
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
    </tr>
  </tbody>
</table> -->


    </v-container>
</template>

<script type="text/javascript">

import axios from 'axios'

const API_URL = "http://localhost:3000/"
const ERIC_API = "http://localhost:4567"



export default {
  name:'details',

  data: function(){
    return {
      city : '',
      image:'',
      details: '',
      message: '',
      role:'',
      title:'',
      Info:[]
    }
  },

mounted(){
  var lon = ''
  var lat = ''
  var FirstName =''
  var LastName =''
  var username =''
  var city =''

  var vm = this

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

      vm.Info.forEach((item)=>{
        lon = item.Location[0]
        lat = item.Location[1]
        FirstName = item.FirstName
        LastName = item.LastName
        username = item.username
        city = item.city
        console.log("longitute:",item.Location[0])
        console.log("latitude:",item.Location[1])
      //  console.log("latitude",item.Location[1])

      });


      vm.lon = lon;
      vm.lat = lat;
      vm.FirstName = FirstName;
      vm.LastName = LastName;
      vm.username = username;
      vm.city = city;


    }).catch(function(error){
      console.log(error);
    });

    var formData = new FormData()
    formData.append('id',vm.city)
    formData.append('Firstname', vm.FirstName)
    formData.append('LastName',vm.LastName)
    formData.append('username',vm.username)
    formData.append('longitude',vm.lon)
    formData.append('latitude',vm.lat)
    formData.append('range',0)
    console.log(formData)

    axios({
      method: 'post',
      url: ERIC_API,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
       .then(function (response) {
        //handle success
        console.log(response)
      //  vm.$router.push({ name: 'details' , params : { homelessName: details.homelessName, city: details.cityName }})
        })
        .catch(function (response) {
          //handle error
          console.log("error",response);
        });

}


}

</script>
