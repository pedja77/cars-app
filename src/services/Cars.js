import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

export default class Cars {

    getAll() {
        return axios.get('/api/cars')
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

    delete(id) {
        return axios.delete(`/api/cars/${id}`)
    }

}

export const cars = new Cars()