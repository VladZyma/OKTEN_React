import axios from 'axios';

import {baseURLCars} from "../configs";

const axiosCarsService = axios.create({
    baseURL: baseURLCars,
});

export {axiosCarsService}