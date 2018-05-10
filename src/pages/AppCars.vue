<template>
  <div>
    <div v-for="car in cars" :key="car.id">
      <h5>{{ car.brand }} {{ car.model }}</h5>
      <ul class="list-unstyled">
        <li class="list-item">Year: {{ car.year }}</li>
        <li class="list-item">Automatic: {{ car.isAutomatic ? 'Yes': 'No' }}</li>
        <li class="list-item">Number of doors: {{ car.numberOfDoors }}</li>
        <li class="list-item">Engine: {{ car.engine }}</li>
        <li class="list-item">Maximum speed: {{ car.maxSpeed }}</li>
        <li class="list-item">
          <router-link class="btn btn-primary small" :to="{name: 'edit-car', params: {id: car.id}}">
            Edit
          </router-link>
          <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    cars
  } from "../services/Cars.js";

  export default {
    data() {
      return {
        cars: []
      };
    },
    created() {
      cars.getAll().then(response => (this.cars = response.data));
    },
    methods: {
      deleteCar(id) {
        let confirmDelete = confirm("Delete this car from database?");
        if (confirmDelete) {
          cars.delete(id).then(() => {
            cars.getAll().then(response => (this.cars = response.data));
          });
        }
      }
    }
  };
</script>