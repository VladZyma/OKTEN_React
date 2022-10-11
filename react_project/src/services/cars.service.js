import {axiosCarsService} from "./axios.cars.service";
import {urlsCars} from "../configs";

const carsService = {
    getAll: () => axiosCarsService.get(urlsCars.cars),
    addCar: (car) => axiosCarsService.post(urlsCars.cars, car),
    deleteById: (id) => axiosCarsService.delete(`${urlsCars.cars}/${id}`),
    updateById: (id, car) => axiosCarsService.put(`${urlsCars.cars}/${id}`, car),
}

export {carsService}