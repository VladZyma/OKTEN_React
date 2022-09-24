import {axiosInstance} from "./axios.service";
import {urls} from '../config';

const carsService = {
    getAll: () => axiosInstance.get(`${urls.cars}`),
    addCar: (car) => axiosInstance.post(`${urls.cars}`, car),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosInstance.put(`${urls.cars}/${id}`, car),
}

export {carsService};