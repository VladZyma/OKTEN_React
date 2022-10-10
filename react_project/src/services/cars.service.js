import {axiosCarsService} from "./axios.cars.service";
import {urlsCars} from "../configs";

const carsService = {
    getAll: () => axiosCarsService.get(urlsCars.cars),
}

export {carsService}