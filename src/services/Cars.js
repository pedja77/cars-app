import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

export default class Cars {

    getAll() {
        return axios.get('/api/cars')
            // .then(response => response.data)
            // .catch(error => console.log(error))
    }

    add(car) {
       return axios.post('/api/cars', car)
    }

    get(id) {
        return axios.get(`/api/cars/${id}`)
    }

    edit(id, car) {
        return axios.put(`api/cars/${id}`, car)
    }
    
}

export const cars = new Cars()