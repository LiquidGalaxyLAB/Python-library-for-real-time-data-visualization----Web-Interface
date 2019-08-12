<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs12  >
            <v-card color="#e8eaff">
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
        <!--      <v-card-actions class="justify-center">
                <v-btn flat color="#0000db" @click="getData()">Go To ></v-btn>
              </v-card-actions>  -->
            </v-card>
          </v-flex>
  </v-layout>

  <v-card v-for="item in roleInfo"
     max-width="1200"
     class="mx-auto"
   >
   <v-layout
     py-4
     pl-4
   >
     <v-flex shrink >
       <v-card-media :src="foto" height="50"
       width="50">
       </v-card-media>
     </v-flex>
     <v-flex text-center>
       <v-container
         grid-list-lg
         pa-0
       >
       <v-layout column>
         <v-flex>
           <p class="display-1 text--primary">
      {{ item.completeName }}</p>
         </v-flex>
       </v-layout>
       </v-container>
     </v-flex>
      <v-spacer></v-spacer>
     <v-flex>
       <v-card-actions class="justify-center">
          <v-spacer></v-spacer>
          <v-btn color="#6495ED" @click="">SEE</v-btn>
          <v-btn color="#87CEFA" @click="">HIDE</v-btn>
       </v-card-actions>
     </v-flex>
   </v-layout>

 </v-card>

</v-container>

</template>

<script type="text/javascript">

import axios from 'axios'

//const API_URL = "http://localhost:3000/"
//const ERIC_API = "http://192.168.86.30:8112/"



export default {
  name:'details',

  data: function(){
    return {
      cityName : '',
      imageRole:'',
      role:'',
      title:'',
      roleInfo: [],
      icon:'',
      foto:''
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
  //console.log('formData', response.data)

  vm.roleInfo.forEach((item)=>{
    //formData define
    var formData = new FormData()
    formData.append('id',item.id)
    formData.append('name',item.completeName)
    formData.append('longitude',item.location[0])
    formData.append('latitude',item.location[1])
    formData.append('range',0)
    formData.append('description', item.lifeHistory)
    formData.append('icon', vm.icon)
 //    formData.append('foto', vm.foto)

  //  vm.roleName = item.completeName
  //  console.log(vm.icon)

  })
})
.catch(function(response){
  console.log("error", response);
})
},
methods: {
},

}


</script>
