<template id="">
  <v-content>
    my name
    <h1>{{ city }}</h1>
  </v-content>
</template>
<script type="text/javascript">
  export default {
    data: function(){
      return {
        city : ''
      }
    },
    mounted(){
      this.city = this.$route.params.cityName
    }
  }
</script>
<style media="screen">

</style>
