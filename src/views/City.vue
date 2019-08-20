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
          <v-flex xs3 v-for="i in details" v-bind:key="i.id">
            <v-card color="#F8BBD0">
            <v-card-media :src="i.img" height="200px">
            </v-card-media>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h3 class="headline mb-0 ">{{i.name}}</h3>
                </div>
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn v-if= "i.name != 'Transactions' " flat color="#1A237E" @click="travelTo(i)">Go To ></v-btn>
                <v-btn v-if= "i.name == 'Transactions' " flat color="#1A237E" @click="show(i)"> SHOW </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
  </v-layout>

    </v-container>
</template>


<script type="text/javascript">

import axios from 'axios'

//const API_URL = "http://localhost:3000/"
//const ERIC_API = "http://10.33.34.116:8080/"





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
          {img:'https://i.ibb.co/5xRGwW5/homeless.png' , name: 'Homeless',role:'allhelpless', id: 'HOMELESS',icon:process.env.VUE_APP_KML_API_URL + 'images/homeless.png', foto:'https://i.ibb.co/2jYPJCV/homeless.png'},
          {img:'https://i.ibb.co/948KGdK/shutterstock-2630522811-3-390x285.jpg',name: 'Donors',role:'donors', id:'DONOR',icon:process.env.VUE_APP_KML_API_URL + 'images/donor.png', foto:'https://i.ibb.co/h2SfjTH/donor.png'},
          {img:'https://i.ibb.co/2h6Cb3C/Volunteer-Agift-to-the-community.png',name: 'Volunteers',role:'volunteers',id:'VOLUNTEER',icon:process.env.VUE_APP_KML_API_URL + 'images/volunteer.png',foto:'https://i.ibb.co/1KnD1XY/volunteer.png'},
          {img:'https://i.ibb.co/d7Jshnh/open-flash-chart-590x314.jpg',name: 'Transactions'}
        ] ,
        roleInfo:[]
      }
    },
    mounted(){
      var vm = this

      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image,
      this.lon = this.$route.params.lon,
      this.lat = this.$route.params.lat,
      this.range = this.$route.params.range


      //homeless statistics variables
      var urlApi_homeless = process.env.VUE_APP_NODE_API_URL + 'allhelpless/' + this.city
      var totalHomeless = ''
      var food = 0
      var clothes = 0
      var work = 0
      var lodging = 0
      var hygiene_products = 0

      //homeless
      axios.get(urlApi_homeless)
      .then(function (response){
        vm.homeless = response.data

        vm.homeless.forEach((item)=>{
            vm.totalHomeless = vm.homeless.length

              if(item.need == 'Food'){
                food += 1
              }else if(item.need == 'Clothes'){
                clothes += 1
              }else if(item.need == 'Work'){
                work += 1
              }else if(item.need == 'Lodging'){
                lodging += 1
              }else if(item.need == 'Hygiene products'){
                hygiene_products += 1
              }
        })

        vm.food = food
        vm.clothes = clothes
        vm.work = work
        vm.lodging = lodging
        vm.hygiene_products = hygiene_products

      })
      .catch(function(response){
        console.log("error", response);
      })

      //donors

      var urlApi_donors = process.env.VUE_APP_NODE_API_URL + 'donors/' + this.city
      var totalDonors = ''

      var personally = 0
      var throughVolunteer = 0
      var food_d = 0
      var clothes_d = 0
      var work_d = 0
      var lodging_d = 0
      var hygiene_products_d = 0


      axios.get(urlApi_donors)
      .then(function (response){
        vm.donors = response.data

        vm.donors.forEach((item)=>{
            vm.totalDonors = vm.donors.length

              if(item.donationType == 'Food'){
                food_d += 1
              }else if(item.donationType == 'Clothes'){
                clothes_d += 1
              }else if(item.donationType == 'Work'){
                work_d += 1
              }else if(item.donationType == 'Lodging'){
                lodging_d += 1
              }else if(item.donationType == 'Hygiene products'){
                hygiene_products_d += 1
              }

              if(item.helpType == 'Personally'){
                personally += 1
              }else if (item.helpType == 'Through a volunteer'){
                throughVolunteer += 1
              }
        })

        vm.personally = personally
        vm.throughVolunteer = throughVolunteer
        vm.food_d = food_d
        vm.clothes_d = clothes_d
        vm.work_d = work_d
        vm.lodging_d = lodging_d
        vm.hygiene_products_d = hygiene_products_d
      })
      .catch(function(response){
        console.log("error", response);
      })

        //volunteers
        var urlApi_volunteers = process.env.VUE_APP_NODE_API_URL + 'volunteers/' + this.city
        var totalVolunteers = ''


        axios.get(urlApi_volunteers)
        .then(function (response){
          vm.volunteers = response.data

          vm.volunteers.forEach((item)=>{
              vm.totalVolunteers = vm.volunteers.length

          })

        })
        .catch(function(response){
          console.log("error", response);
        })


    },
    methods: {

      travelTo(details){
        var vm = this

    //    console.log(details)

        var urlApi = process.env.VUE_APP_NODE_API_URL + details.role + '/' + this.city
      //  console.log(urlApi)
        vm.$router.push({ name: 'details' , params : { title:details.name, cityName:this.city, role: details.role, imageRole:details.img, icon:details.icon, foto: details.foto }})

        axios.get(urlApi)
       .then(function (response){
      //   console.log(response.data);
         vm.roleInfo = response.data


         vm.roleInfo.forEach((item)=>{

           //formData define
           var formData = new FormData()
           formData.append('id',details.id)
           formData.append('name',item.completeName)
           formData.append('longitude',item.location[0])
           formData.append('latitude',item.location[1])
           formData.append('range',0)
           formData.append('icon',details.icon)
           formData.append('scale',1.3)
      //   formData.append('description', item.lifeHistory)


          //addplacemark method
           axios({
             method: 'post',
             url: process.env.VUE_APP_KML_API_URL + 'kml/builder/addplacemark',
             data: formData,
             config: { headers: {'Content-Type': 'multipart/form-data' }}
           })
            .then(function (response) {
             //handle success
          //   console.log("details Send")
          //   console.log(response)
           })
           .catch(function (response) {
             //handle error
            console.log("error",response);

           });
         });
       }).catch(function(error){
          console.log(error);

       });

     },

     show(details){
       var vm = this
       var lon = this.lon
       var lat = this.lat
       var range = this.range
       var st_range = 3000000
       var statistics = 'LOCAL STATISTICS : ' + this.city
       var description_homeless = ''
       var description_donors = ''
       var description_volunteers = ''
       var description = ''
       var formData = new FormData()

       description_homeless =  '------- HOMELESS -------'  + '\n'+ '\n' + 'Total homeless: ' + vm.totalHomeless + '\n'+ '\n' + 'NEEDS' + '\n' + '\n' + 'Food:' + vm.food + '\n' + 'Clothes:' + vm.clothes + '\n' +
                       'Work:' + vm.work + '\n' + 'Lodging:' + vm.lodging + '\n' + 'Hygiene products:' + vm.hygiene_products

       description_donors =  '--------- DONORS ---------'  + '\n'+ '\n' + 'Total donors: ' + vm.totalDonors +  '\n'+ '\n' +
                      'HELP TYPE: '+ '\n' + '\n' +'Personally: ' + vm.personally + '\n' + 'Through a volunteer: ' + vm.throughVolunteer + '\n' + '\n' +  'DONATION TYPES' + '\n' + '\n' + 'Food:' + vm.food_d + '\n' +
                      'Clothes:' + vm.clothes_d + '\n' + 'Work:' + vm.work_d + '\n' + 'Lodging:' + vm.lodging_d + '\n' + 'Hygiene products:' + vm.hygiene_products_d

       description_volunteers = '------- VOLUNTEERS -------' + '\n' + '\n' + 'Total volunteers: ' + vm.totalVolunteers +'\n'+ '\n'

       description = description_homeless + '\n' + '\n' + description_donors  + '\n' + '\n' + description_volunteers

       formData.append('id',statistics)
       formData.append('name',statistics)
       formData.append('longitude',lon)
       formData.append('latitude',lat)
       formData.append('range',range)
       formData.append('description',description)


       axios({
         method: 'get',
         url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + st_range
     //    data: formData,
     //    config: { headers: {'Content-Type': 'multipart/form-data' }}
       })
        .then(function (response) {
         //handle success

       })
       .catch(function (response) {
         //handle error
         console.log("error",response);
       }),


          //addplacemark method
           axios({
             method: 'post',
             url: process.env.VUE_APP_KML_API_URL + 'kml/builder/addplacemark',
             data: formData,
             config: { headers: {'Content-Type': 'multipart/form-data' }}
           })
            .then(function (response) {
             //handle success
           })
           .catch(function (response) {
             //handle error
            console.log("error",response);
       }).catch(function(error){
          console.log(error);

       }),

       axios({
         method: 'get',
         url: process.env.VUE_APP_KML_API_URL + 'kml/manage/balloon/'+ statistics + '/' + 1
     //    data: formData,
     //    config: { headers: {'Content-Type': 'multipart/form-data' }}
       })
        .then(function (response) {
         //handle success
       //  console.log("cities Send")
      //   console.log(response)

       })
       .catch(function (response) {
         //handle error
         console.log("error",response);
       })

     }

    }
}

</script>


<style media="screen">
