<template>
<div>
  <form @submit.prevent="submit">
  <div class="form-group" >
    <label for="brand">Brand</label>
    <input type="text" class="form-control" id="brand"  placeholder="Enter brand" v-model="car.brand" minlength="2" required>
  </div>
  <div class="form-group">
    <label for="model">Model</label>
    <input type="text" class="form-control" id="model" placeholder="Enter model" v-model="car.model" minlength="2" required>
  </div>
  <div class="form-group">
    <label for="year">Year</label>
    <select type="text" class="form-control" id="year" v-model="car.year" required>
        <option v-for="year in yearsList" :key="year" :value="year">{{ year }}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="max-speed">Maximum speed</label>
    <input type="number" class="form-control" id="max-speed" min="0" v-model="car.maxSpeed">
  </div>
  <div class="form-group">
    <label for="number-of-doors">Number of doors</label>
    <input type="number" class="form-control" id="number-of-doors" min="0" v-model="car.numberOfDoors" required>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="is-automatic" v-model="car.isAutomatic">
    <label class="form-check-label" for="is-automatic">Is gearbox automatic</label>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="engine" id="diesel" value="diesel" v-model="car.engine" checked="checked">
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
  <input class="btn btn-primary" value="Preview" @click="preview">
</form>
</div>
</template>

<script>
import { cars } from "../services/Cars";

export default {
  data() {
    return {
      car: {
        brand: "",
        model: "",
        year: "",
        maxSpeed: "",
        numberOfDoors: "",
        isAutomatic: false,
        engine: ""
      }
    };
  },
  created() {
    console.log(this.$route.params);
    this.getCar();
  },
  methods: {
    submit() {
      this.car.year = parseInt(this.car.year);
      this.car.maxSpeed = parseInt(this.car.maxSpeed);
      this.car.numberOfDoors = parseInt(this.car.numberOfDoors);
      if (!this.car.id) {
        cars
          .add(this.car)
          .then(() => {
            this.$router.push("/cars");
          })
          .catch(error => console.log(error));
      } else {
        console.log("Edit: ", this.car);
        cars
          .edit(this.$route.params.id, this.car)
          .then(() => {
            this.$router.push("/cars");
          })
          .catch(err => console.log(err));
      }
    },
    preview() {
      let car = `
                Brand: ${this.car.brand}
                Model: ${this.car.model}
                Year: ${this.car.year}
                Maximum speed: ${this.car.maxSpeed}
                Number of doors: ${this.car.numberOfDoors}
                Automatic gearbox: ${this.car.isAutomatic ? "Yes" : "No"}
                Engine: ${this.car.engine}
            `;
      alert(car);
    },
    getCar() {
      if (this.$route.params.id) {
        cars.get(this.$route.params.id).then(response => {
          console.log(response.data);
          this.car = response.data;
        });
      }
    }
  },
  computed: {
    yearsList() {
      return Array(29)
        .fill(1990)
        .map((el, i) => el + i);
    }
  }
};
</script>


