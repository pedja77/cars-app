import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default class Cars {

    getAll() {
        return axios.get('/cars')
            // .then(response => response.data)
            // .catch(error => console.log(error))
    }

    add(car) {
       return axios.post('/cars', car)
    }

    get(id) {
        return axios.get(`/cars/${id}`)
    }
    
}

export const cars = new Cars()