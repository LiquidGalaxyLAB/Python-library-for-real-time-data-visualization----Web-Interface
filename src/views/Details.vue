<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs12  >
            <v-card color="#F8BBD0">
            <v-card-media :src="imageRole" height="200px">
            </v-card-media>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h3 class="headline mb-0 ">{{title}}</h3>
                </div>
                <v-spacer> </v-spacer>
                <div>
                  <h3 class="headline mb-0 ">{{cityName}}</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
  </v-layout>

  <v-card-title>
     <v-spacer></v-spacer>
     <v-text-field
       append-icon="search"
       label="Search"
       single-line
       hide-details
       v-model="search"
     ></v-text-field>
   </v-card-title>
   <v-data-table
     :headers="headers"
     :items="items"
     :search="search"
   >
     <template slot="items" slot-scope="props">

       <td class="text-xs-left">{{ props.item.completeName }}</td>
       <td class="text-xs-right">
       <v-btn  flat class text icon color="#0D47A1" @click="show(props.item._id, props.item.location[0], props.item.location[1], props.item.completeName, props.item.lifeHistory, props.item.need, props.item.birthyear, props.item.schedule, props.item.donationType, props.item.helpType, props.item.city)"><i class="material-icons">
remove_red_eye
</i></v-btn>
       <v-btn flat class text icon color="#E91E63" @click="show(props.item.location[0], props.item.location[1])"><i class="material-icons">
360
</i></v-btn>
       </td>
     </template>
     <v-alert slot="no-results" :value="true" color="error" icon="warning">
       Your search for "{{ search }}" found no results.
     </v-alert>
   </v-data-table>
 </v-card>

</v-container>



</template>

<script type="text/javascript">

import axios from 'axios'



export default {
  name:'details',
  created: function(){
     this.getData()
 },

  data: function(){
    return {
      cityName : '',
      imageRole:'',
      role:'',
      title:'',
      roleInfo: [],
      icon:'',
      foto:'',
      roleName: [],
      search: '',
     headers: [
       { text: 'Complete Name', value: 'completeName' },
       { text: 'Action', sortable: false, align: 'right', value: 'action' },
     ],
     items: []

   }
 },

mounted(){
  var vm = this

  this.cityName = this.$route.params.cityName;
  this.imageRole = this.$route.params.imageRole;
  this.role = this.$route.params.role;
  this.title = this.$route.params.title;
  this.icon = this.$route.params.icon;
  this.foto = this.$route.params.foto;

  console.log(this.title)

  var urlApi = process.env.VUE_APP_NODE_API_URL + this.role + '/' + this.cityName

  axios.get(urlApi)
  .then(function (response){
  vm.roleInfo = response.data

})
.catch(function(response){
  console.log("error", response);
})
},

methods: {
  getData: function(){
    var vm = this
    this.role = this.$route.params.role;
    this.cityName = this.$route.params.cityName;

    var urlApi = process.env.VUE_APP_NODE_API_URL + this.role + '/' + this.cityName
    console.log(urlApi)
    axios.get(urlApi)
    .then(function (response){
      vm.items = response.data

    })
    .catch(function(response){
      console.log("error", response);
    })

},
  show(id, longitude, latitude, completeName, lifeHistory, need, birthyear, schedule,donationType,helpType,city){
    var vm = this
    var urlApi = process.env.VUE_APP_NODE_API_URL + this.role + '/' + this.cityName
    var formData = new FormData()
    var description = ''

    axios.get(urlApi)
    .then(function (response){
      vm.roleInfo = response.data

    })
    .catch(function(response){
      console.log("error", response);
    })


    if (this.role == 'allhelpless'){
      description ='Birthyear:  ' + birthyear + '\n'+ '\n' + 'Life History:' + '\n' + lifeHistory + '\n' + '\n' + 'Most important need:  ' + need+ '\n' + '\n' + 'Schedule: '  + schedule
    }else if (this.role == 'donors'){
      description = 'Donation type:  ' + donationType + '\n' + '\n' + 'Help type: ' + helpType
    }else if (this.role == 'volunteers'){
      description = 'Birthyear: ' + birthyear + '\n' + '\n' + 'City: ' + city
    }



    formData.append('id',completeName)
    formData.append('name',completeName)
    formData.append('longitude',longitude)
    formData.append('latitude',latitude)
    formData.append('range',70)
    formData.append('icon',this.icon)
    formData.append('scale',1.3)
    formData.append('description',description)


    axios({
      method: 'get',
      url: process.env.VUE_APP_KML_API_URL + 'kml/manage/clean',
   //   data: formData,
   //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
     .then(function (response) {
      //handle success
      console.log(response)
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
    //   console.log("details Send")
    //   console.log(response)
     })
     .catch(function (response) {
       //handle error
      console.log("error",response);
 }).catch(function(error){
    console.log(error);

 }),

    axios({
      method: 'get',
      url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ longitude + '/' + latitude + '/' + 2000
  //    data: formData,
  //    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
     .then(function (response) {
      //handle success
    //  console.log("cities Send")
      console.log(response)

    })
    .catch(function (response) {
      //handle error
      console.log("error",response);
    }),

    axios({
      method: 'get',
      url: process.env.VUE_APP_KML_API_URL + 'kml/manage/balloon/'+ completeName + '/' + 1
  //    data: formData,
  //    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
     .then(function (response) {
      //handle success
    //  console.log("cities Send")
      console.log(response)

    })
    .catch(function (response) {
      //handle error
      console.log("error",response);
    });

  },

  orbit(longitude, latitude){
    var formData = new FormData()
    formData.append('longitude',longitude)
    formData.append('latitude',latitude)
    formData.append('altitude',200)


    axios({
      method: 'post',
      url: process.env.VUE_APP_KML_API_URL + 'kml/builder/orbit',
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
}).catch(function(error){
   console.log(error);

})
  }

}

}


</script>
