<template>
  <div id="app">
    <Navbar />
    <AppCars />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppCars from './pages/AppCars.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AppCars
  }
}
</script>


