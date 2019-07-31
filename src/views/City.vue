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

    </v-container>
</template>


<script type="text/javascript">

import axios from 'axios'

const API_URL = "http://localhost:3000/"
const ERIC_API = "http://192.168.86.30:8112/"


  export default {
    name:'details',

    data: function(){
      return {
        city : '' ,
        title:'',
        cityName:'',
        imageCity:'' ,
        imageRole:'' ,
        role:'',
        details: [
          {img:'https://i.ibb.co/5xRGwW5/homeless.png' , name: 'Homeless',role:'allhelpless', id: 'HOMELESS'},
          {img:'https://i.ibb.co/948KGdK/shutterstock-2630522811-3-390x285.jpg',name: 'Donors',role:'donors', id:'DONOR'},
          {img:'https://i.ibb.co/2h6Cb3C/Volunteer-Agift-to-the-community.png',name: 'Volunteers',role:'volunteers',id:'VOLUNTEER'},
          {img:'https://i.ibb.co/d7Jshnh/open-flash-chart-590x314.jpg',name: 'Transactions'}
        ] ,
        roleInfo:[]
      }
    },
    mounted(){


      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image

    },
    methods: {
      travelTo(details){
        var vm = this
        var lon = ''
        var lat=''
        var name=''
        var formData = new FormData()
    //    console.log(details)

        var urlApi = API_URL + details.role + '/' + this.city
        console.log(urlApi)
        vm.$router.push({ name: 'details' , params : { title:details.name, cityName:this.city, role: details.role, imageRole:details.img }})


        //clean kmls mthod
        axios({
          method: 'get',
          url: ERIC_API + 'kml/manage/clean',
       //   data: formData,
       //   config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
         .then(function (response) {
          //handle success
          console.log("clean details")
          console.log(response)
        })
        .catch(function (response) {
          //handle error
          console.log("error",response);
        });


        axios.get(urlApi)
       .then(function (response){
         console.log(response.data);
         vm.roleInfo = response.data

         vm.roleInfo.forEach((item)=>{

           //formData define
           formData.append('id',details.id)
           formData.append('name',item.completeName)
           formData.append('longitude',item.location[0])
           formData.append('latitude',item.location[1])
           formData.append('range',0)
           console.log('Id',details.id)
           console.log('Name:',item.completeName)
           console.log('longitude:',item.location[0])
           console.log('latitude',item.location[1])
           console.log('formData',formData)


              //addplacemark method
           axios({
             method: 'post',
             url: ERIC_API + 'kml/builder/addplacemark',
             data: formData,
             config: { headers: {'Content-Type': 'multipart/form-data' }}
           })
            .then(function (response) {
             //handle success
             console.log("details Send")
             console.log(response)
           })
           .catch(function (response) {
             //handle error
             console.log("error",response);
           });
         });
       }).catch(function(error){
         console.log(error);
       });

       //clean kmls method
      }
    }
}

</script>


<style media="screen">

</style
