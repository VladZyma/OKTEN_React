import axios from 'axios';

import {baseURLJson} from "../configs";

const axiosJsonService = axios.create({
    baseURL: baseURLJson,
});

export {axiosJsonService}