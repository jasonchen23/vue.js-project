<template>
  <NavbarComponent />
  <router-view />
  <Footer-component />
  
  
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components:{
    NavbarComponent,
    FooterComponent
  }
}
</script>
<style>
  body{
    margin: 0px;
  }
</style>
