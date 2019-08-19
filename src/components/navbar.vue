<template>
  <v-container  align-content-left justify-center row fill-height >
   <nav  id="menu" class="nav" >
  	<ul style="margin-left:auto;margin-right:auto;">
  		<li>
  			<a  href="#/" title="">
  			<span  class="icon"> <i aria-hidden="true"  class="icon-home"></i></span><span>Home</span>
  			</a>
  		</li>
  		<li>
  			<a  href="#/cities" title=""><span class="icon"> <i aria-hidden="true" class="icon-cities"></i></span><span>Cities</span></a>
      </li>
  		<li>
  			<a  href="#/about" title=""><span  class="icon"><i  aria-hidden="true" class="icon-about"></i></span><span>About</span></a>
  		</li>
      <li>
        <a  href="#" v-bind:class="statistics" @click="statistics" title=""><span  class="icon"><i  aria-hidden="true" class="icon-stats-dots"></i></span><span>Statistics</span></a>
      </li>
  	</ul>
  </nav>
  </v-container>
</template>



<script type="text/javascript">

import axios from 'axios'


export default {
  name:'navbar',

  data: function(){
    return{
        homeless: [],
        donors: [],
        volunteers: []
  }
},
mounted(){
  var vm = this

  //homeless statistics variables
  var urlApi_homeless = process.env.VUE_APP_NODE_API_URL + 'allhelpless'
  var totalHomeless = ''
  var lleidaHomeless = 0
  var barcelonaHomeless = 0
  var newYorkHomeless = 0
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
          if(item.city == 'Lleida'){
            lleidaHomeless += 1
          }else if(item.city == 'Barcelona'){
            barcelonaHomeless += 1
          }else if(item.city == 'New York'){
            newYorkHomeless += 1
          }

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

    vm.lleidaHomeless = lleidaHomeless
    vm.barcelonaHomeless = barcelonaHomeless
    vm.newYorkHomeless = newYorkHomeless
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

  var urlApi_donors = process.env.VUE_APP_NODE_API_URL + 'donors'
  var totalDonors = ''
  var lleidaDonors = 0
  var barcelonaDonors = 0
  var newYorkDonors = 0
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
          if(item.city == 'Lleida'){
            lleidaDonors += 1
          }else if(item.city == 'Barcelona'){
            barcelonaDonors += 1
          }else if(item.city == 'New York'){
            newYorkDonors += 1
          }

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

    vm.lleidaDonors = lleidaDonors
    vm.barcelonaDonors = barcelonaDonors
    vm.newYorkDonors = newYorkDonors
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
    var urlApi_volunteers = process.env.VUE_APP_NODE_API_URL + 'volunteers'
    var totalVolunteers = ''
    var lleidaVolunteers = 0
    var barcelonaVolunteers = 0
    var newYorkVolunteers = 0

    axios.get(urlApi_volunteers)
    .then(function (response){
      vm.volunteers = response.data

      vm.volunteers.forEach((item)=>{
          vm.totalVolunteers = vm.volunteers.length
            if(item.city == 'Lleida'){
              lleidaVolunteers += 1
            }else if(item.city == 'Barcelona'){
              barcelonaVolunteers += 1
            }else if(item.city == 'New York'){
              newYorkVolunteers += 1
            }


      })

      vm.lleidaVolunteers = lleidaVolunteers
      vm.barcelonaVolunteers = barcelonaVolunteers
      vm.newYorkVolunteers = newYorkVolunteers
    })
    .catch(function(response){
      console.log("error", response);
    })


},

methods:{
  statistics: function(){
    var vm = this
      this.getData()

  },

  getData(){
    var vm = this
    var lon = 39.687043
    var lat = 21.941500
    var range = 38000000
    var st_range = 30000000
    var statistics = 'GLOBAL STATISTICS'
    var description_homeless = ''
    var description_donors = ''
    var description_volunteers = ''
    var description = ''
    var formData = new FormData()


    description_homeless =  '------- HOMELESS -------'  + '\n'+ '\n' + 'Total homeless: ' + vm.totalHomeless + '\n' +'Lleida homeless: ' + vm.lleidaHomeless + '\n' + 'Barcelona homeless: ' + vm.barcelonaHomeless + '\n' + 'New York homeless: ' + vm.newYorkHomeless + '\n'+ '\n' + 'NEEDS' + '\n' + '\n' + 'Food:' + vm.food + '\n' + 'Clothes:' + vm.clothes + '\n' +
                    'Work:' + vm.work + '\n' + 'Lodging:' + vm.lodging + '\n' + 'Hygiene products:' + vm.hygiene_products

    description_donors =  '--------- DONORS ---------'  + '\n'+ '\n' + 'Total donors: ' + vm.totalDonors + '\n' +'Lleida donors: ' + vm.lleidaDonors + '\n' + 'Barcelona donors: ' + vm.barcelonaDonors + '\n' + 'New York donors: ' + vm.newYorkDonors + '\n'+ '\n' +
                   'HELP TYPE: '+ '\n' + '\n' +'Personally: ' + vm.personally + '\n' + 'Through a volunteer: ' + vm.throughVolunteer + '\n' + '\n' +  'DONATION TYPES' + '\n' + '\n' + 'Food:' + vm.food_d + '\n' +
                   'Clothes:' + vm.clothes_d + '\n' + 'Work:' + vm.work_d + '\n' + 'Lodging:' + vm.lodging_d + '\n' + 'Hygiene products:' + vm.hygiene_products_d

    description_volunteers = '------- VOLUNTEERS -------' + '\n' + '\n' + 'Total volunteers: ' + vm.totalVolunteers + '\n' +'Lleida volunteers: ' + vm.lleidaVolunteers + '\n' + 'Barcelona volunteers: ' + vm.barcelonaVolunteers + '\n' + 'New York volunteers: ' + vm.newYorkVolunteers + '\n'+ '\n'

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
      url: process.env.VUE_APP_KML_API_URL + 'kml/manage/balloon/'+ statistics + '/' + 1
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
    })
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./navbar.css" scoped>

</style>
