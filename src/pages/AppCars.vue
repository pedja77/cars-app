<template>
  <div>
      <div v-for="car in cars" :key="car.id">
          <h5>{{ car.brand }} {{ car.model }}</h5>
          <ul>
              <li>Year: {{ car.year }}</li>
              <li>Automatic: {{ car.isAutomatic ? 'Yes': 'No' }}</li>
              <li>Number of doors: {{ car.numberOfDoors }}</li>
              <li>Engine: {{ car.engine }}</li>
              <li>Maximum speed: {{ car.maxSpeed }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { cars } from '../services/Cars.js'

export default {
    data() {
        return {
            cars: []
        }
    },
    created() {
        cars.getAll()
            .then(response => this.cars = response.data)
    }
}
</script>


