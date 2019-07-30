<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs12 >
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
            </v-card>
          </v-flex>
  </v-layout>


    </v-container>
</template>

<script type="text/javascript">

import axios from 'axios'

const API_URL = "http://localhost:3000/"
const ERIC_API = "http://10.33.34.116:4567"



export default {
  name:'details',

  data: function(){
    return {
      cityName : '',
      imageRole:'',
      role:'',
      title:''
    }
  },

mounted(){
 this.cityName = this.$route.params.cityName;
 this.imageRole = this.$route.params.imageRole;
 this.role = this.$route.params.role;
 this.title = this.$route.params.title;
// var urlApi = API_URL + this.role + '/' + this.city

}


}

</script>
