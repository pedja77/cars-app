<template>
  <div id="app">
    <nav-bar />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppCars from './pages/AppCars.vue'
import AddCar from './pages/AddCar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    AppCars,
    AddCar
  }
}
</script>


