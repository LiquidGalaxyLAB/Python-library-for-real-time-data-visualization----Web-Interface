<template>
  <div class="about" >
  <v-layout align-center justify-center row fill-height>
  <h1 >This is an about page</h1>
</v-layout>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    navbar
  }
}
</script>
