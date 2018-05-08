<template>
  <div id="app">
    <Navbar />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppCars from './pages/AppCars.vue'
import AddCar from './pages/AddCar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AppCars,
    AddCar
  }
}
</script>


