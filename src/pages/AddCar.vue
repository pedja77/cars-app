<template>
<div>
  <form @submit.prevent="submit">
  <div class="form-group" >
    <label for="brand">Brand</label>
    <input type="text" class="form-control" id="brand"  placeholder="Enter brand" v-model="car.brand">
  </div>
  <div class="form-group">
    <label for="model">Model</label>
    <input type="text" class="form-control" id="model" placeholder="Enter model" v-model="car.model">
  </div>
  <div class="form-group">
    <label for="year">Year</label>
    <select type="text" class="form-control" id="year" v-model="car.year">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="max-speed">Maximum speed</label>
    <input type="number" class="form-control" id="max-speed" min="0" v-model="car.maxSpeed">
  </div>
  <div class="form-group">
    <label for="number-of-doors">Number of doors</label>
    <input type="number" class="form-control" id="number-of-doors" min="0" v-model="car.numberOfDoors">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="is-automatic" v-model="car.isAutomatic">
    <label class="form-check-label" for="is-automatic">Is gearbox automatic</label>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="engine" id="diesel" value="diesel" v-model="car.engine" checked>
      <label class="form-check-label" for="diesel">
        Diesel
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="engine" id="petrol" value="petrol" v-model="car.engine">
      <label class="form-check-label" for="petrol">
        Petrol
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="engine" id="electric" value="electric" v-model="car.engine">
      <label class="form-check-label" for="electric">
        Electric
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="engine" id="hybrid" value="hybrid" v-model="car.engine">
      <label class="form-check-label" for="hybrid">
        Hybrid
      </label>
    </div>
    </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <input class="btn btn-primary" type="reset" value="Reset">
</form>
</div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data() {
        return {
            years: [
                1990, 1991, 1992, 1993, 1994, 1995,1996, 1997, 1998, 1999, 2000,
                2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 
                2012, 2013, 2014, 2015, 2016, 2017, 2018
                ],
            car: {
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                numberOfDoors: '',
                isAutomatic: false,
                engine: ''
            }
        }
    },
    methods: {
        submit() {
            this.car.year = parseInt(this.car.year)
            this.car.maxSpeed = parseInt(this.car.maxSpeed)
            this.car.numberOfDoors = parseInt(this.car.numberOfDoors)
            cars.add(this.car)
                .then(() => {
                    //console.log(response)
                    this.$router.push('/cars')
                })
                .catch(error => console.log(error))
        }
    }
}
</script>


