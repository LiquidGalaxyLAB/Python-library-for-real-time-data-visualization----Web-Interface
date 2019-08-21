<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GSoc2019   </span>
        <span class="font-weight-light"> Python library for real time data visualization</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="#82B1FF" @click="demo()">DEMO</v-btn>
      <v-btn color="#ff6b6b" @click="stopDemo()">STOP DEMO</v-btn>
      <v-btn color="#ffa4a4" @click="stopOrbit()">STOP ORBIT</v-btn>
      <v-btn  color="#a5ff91" @click="cleanKml()">clean KMLs</v-btn>
    </v-toolbar>

    <v-content>
      <v-container align-center>
        <navbar/>
    </v-container>
    </v-content>
    <router-view></router-view>
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="#FAFAFA">
          <v-card-title primary-title class="justify-center">
              <h3 class="headline mb-0 ">Main logo and Partners</h3>
          </v-card-title>
          <v-card-media src="https://i.ibb.co/zGdBvdz/logos-claudia-2.png">
     </v-card-media>
        </v-card>
      </v-flex>
  </v-app>
</template>

<script>
import navbar from './components/navbar'
import axios from 'axios'
//const ERIC_API = "http://192.168.86.30:8112/"

export default {
  name: 'App',
  components: {
    navbar
  },
    data: function(){
    return {
      roleInfo: []
    }

  },
  methods: {
    stopDemo(){

    },
    demo(){

        this.demoNewYork(),
        setTimeout(()=>{

          this.demoLleida()
        },34000),
        setTimeout(()=>{
          this.demoBarcelona()
        },68000);

    },

    demoNewYork(){

      var vm = this
      var cityName = 'New York'
      var lon = -73.935242
      var lat = 40.730610
      var range = 13000
      var urlApi = process.env.VUE_APP_NODE_API_URL + 'allhelpless' + '/' + cityName



      axios({
      method: 'get',
      url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

    })
     .then(function (response) {
      //handle success

  //    console.log(response)

    })
    .catch(function (response) {
      //handle error
      console.log("error",response);
    }),

    axios.get(urlApi)
   .then(function (response){
  //   console.log(response.data);
     vm.roleInfo = response.data


     vm.roleInfo.forEach((item)=>{

       //formData define
       var formData = new FormData()
       formData.append('id',item.completeName)
       formData.append('name',item.completeName)
       formData.append('longitude',item.location[0])
       formData.append('latitude',item.location[1])
       formData.append('range',0)
       formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
       formData.append('scale',1.3)


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

   }),


  setTimeout(()=>{
    this.distanceFlyNewYork()
  },7000);

},

distanceFlyNewYork(){

  var lon = -73.935242
  var lat = 40.730610
  var range = 100000

  axios({
  method: 'get',
  url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
 .then(function (response) {
  //handle success

//  console.log(response)

})
.catch(function (response) {
  //handle error
  console.log("error",response);
}),

setTimeout(()=>{
  this.showBalloonNewYork()
},7000);


},



  showBalloonNewYork(){
  var completeName = 'Helen  Phillips'
   var longitude = -73.924827
   var latitude = 40.804141
   var birthyear = 1989
   var lifeHistory = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   var need = 'Clothes'
   var schedule = 'Every monday from 15.00h to 17:00h'
   var description = ''
   var formData = new FormData()

   description ='Birthyear:  ' + birthyear + '\n'+ '\n' + 'Life History:' + '\n' + lifeHistory + '\n' + '\n' + 'Most important need:  ' + need  + '\n' + '\n' + 'Schedule: '  + schedule

  formData.append('id',completeName)
  formData.append('name',completeName)
  formData.append('longitude',longitude)
  formData.append('latitude',latitude)
  formData.append('range',70)
  formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
  formData.append('scale',1.3)
  formData.append('description',description)

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
  }),


  setTimeout(()=>{
    this.cleanKml()
  },10000),

  setTimeout(()=>{
    this.flySpaceNewYork()
  },10000);

  },

  flySpaceNewYork(){

    var lon = -73.935242
    var lat = 40.730610
    var range = 13000000

    axios({
    method: 'get',
    url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

  })
   .then(function (response) {
    //handle success

  //  console.log(response)

  })
  .catch(function (response) {
    //handle error
    console.log("error",response);
  })

  },

  //Demo Lleida

  demoLleida(){

    var vm = this
    var cityName = 'Lleida'
    var lon = 0.6419
    var lat = 41.6109
    var range = 4000
    var urlApi = process.env.VUE_APP_NODE_API_URL + 'allhelpless' + '/' + cityName



    axios({
    method: 'get',
    url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

  })
   .then(function (response) {
    //handle success

//    console.log(response)

  })
  .catch(function (response) {
    //handle error
    console.log("error",response);
  }),

  axios.get(urlApi)
 .then(function (response){
//   console.log(response.data);
   vm.roleInfo = response.data


   vm.roleInfo.forEach((item)=>{

     //formData define
     var formData = new FormData()
     formData.append('id',item.completeName)
     formData.append('name',item.completeName)
     formData.append('longitude',item.location[0])
     formData.append('latitude',item.location[1])
     formData.append('range',0)
     formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
     formData.append('scale',1.3)


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

 }),


setTimeout(()=>{
  this.distanceFlyLleida()
},7000);

},

distanceFlyLleida(){

var lon = 0.6419
var lat = 41.6109
var range = 80000

axios({
method: 'get',
url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
.then(function (response) {
//handle success

//  console.log(response)

})
.catch(function (response) {
//handle error
console.log("error",response);
}),

setTimeout(()=>{
this.showBalloonLleida()
},7000);


},



showBalloonLleida(){
  var completeName = 'Andre Fernandes'
  var longitude = 0.63693
  var latitude = 41.600435
  var birthyear = 1970
  var lifeHistory = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  var need = 'Food'
  var schedule = 'Every monday from 15.00h to 17:00h'
  var description = ''
  var formData = new FormData()

description ='Birthyear:  ' + birthyear + '\n'+ '\n' + 'Life History:' + '\n' + lifeHistory + '\n' + '\n' + 'Most important need:  ' + need  + '\n' + '\n' + 'Schedule: '  + schedule

formData.append('id',completeName)
formData.append('name',completeName)
formData.append('longitude',longitude)
formData.append('latitude',latitude)
formData.append('range',70)
formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
formData.append('scale',1.3)
formData.append('description',description)

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
}),


setTimeout(()=>{
  this.cleanKml()
},10000),

setTimeout(()=>{
  this.flySpaceLleida()
},10000);

},

flySpaceLleida(){

  var lon = 0.6419
  var lat = 41.6109
  var range = 13000000

  axios({
  method: 'get',
  url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
 .then(function (response) {
  //handle success

//  console.log(response)

})
.catch(function (response) {
  //handle error
  console.log("error",response);
})

},

//Demo Barcelona

demoBarcelona(){

  var vm = this
  var cityName = 'Barcelona'
  var lon = 2.154007
  var lat = 41.390205
  var range = 9000
  var urlApi = process.env.VUE_APP_NODE_API_URL + 'allhelpless' + '/' + cityName



  axios({
  method: 'get',
  url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
 .then(function (response) {
  //handle success

//    console.log(response)

})
.catch(function (response) {
  //handle error
  console.log("error",response);
}),

axios.get(urlApi)
.then(function (response){
//   console.log(response.data);
 vm.roleInfo = response.data


 vm.roleInfo.forEach((item)=>{

   //formData define
   var formData = new FormData()
   formData.append('id',item.completeName)
   formData.append('name',item.completeName)
   formData.append('longitude',item.location[0])
   formData.append('latitude',item.location[1])
   formData.append('range',0)
   formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
   formData.append('scale',1.3)


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

}),


setTimeout(()=>{
this.distanceFlyBarcelona()
},10000);

},

distanceFlyBarcelona(){

  var lon = 2.154007
  var lat = 41.390205
  var range = 100000

axios({
method: 'get',
url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
.then(function (response) {
//handle success

//  console.log(response)

})
.catch(function (response) {
//handle error
console.log("error",response);
}),

setTimeout(()=>{
this.showBalloonBarcelona()
},7000);


},



showBalloonBarcelona(){
  var completeName = 'Rafael Santiago'
  var longitude = 2.208446
  var latitude = 41.402278
  var birthyear = 1978
  var lifeHistory = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  var need = 'Work'
  var schedule = 'Every monday from 15.00h to 17:00h'
  var description = ''
  var formData = new FormData()

  description ='Birthyear:  ' + birthyear + '\n'+ '\n' + 'Life History:' + '\n' + lifeHistory + '\n' + '\n' + 'Most important need:  ' + need  + '\n' + '\n' + 'Schedule: '  + schedule

formData.append('id',completeName)
formData.append('name',completeName)
formData.append('longitude',longitude)
formData.append('latitude',latitude)
formData.append('range',70)
formData.append('icon','https://i.ibb.co/2jYPJCV/homeless.png')
formData.append('scale',1.3)
formData.append('description',description)

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
}),


setTimeout(()=>{
this.cleanKml()
},10000),

setTimeout(()=>{
this.flySpaceBarcelona()
},10000);

},

flySpaceBarcelona(){

var lon = 2.154007
var lat = 41.390205
var range = 13000000

axios({
method: 'get',
url: process.env.VUE_APP_KML_API_URL + 'kml/flyto/'+ lon + '/' + lat + '/' + range

})
.then(function (response) {
//handle success

//  console.log(response)

})
.catch(function (response) {
//handle error
console.log("error",response);
})

},

    cleanKml(){
      //clean kmls mthod
      axios({
        method: 'get',
        url: process.env.VUE_APP_KML_API_URL + 'kml/manage/clean',
     //   data: formData,
     //   config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
       .then(function (response) {
        //handle success
    //    console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log("error",response);
      });
    },

    stopOrbit(){
      axios({
        method: 'get',
        url: process.env.VUE_APP_KML_API_URL + 'kml/manage/stopTour',
     //   data: formData,
     //   config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
       .then(function (response) {
        //handle success
    //    console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log("error",response);
      });
    }

  }
}
</script>
