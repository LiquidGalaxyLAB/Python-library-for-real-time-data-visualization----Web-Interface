<template id="">
  <v-container grid-list-lg >
      <v-layout row wrap>
          <v-flex xs4>
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

          <v-layout>
              
          </v-layout>
        </v-layout>
    </v-container>
</template>


<script type="text/javascript">
  export default {
    data: function(){
      return {
        city : '',
        imageCity:''
      }
    },
    mounted(){
      this.city = this.$route.params.cityName,
      this.imageCity = this.$route.params.image

    }
  }
</script>


<style media="screen">

</style>
