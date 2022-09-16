import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: 'https://api.spacexdata.com',
});

const getSpaseXData = () => {
    return axiosInstance.get('/v3/launches/');
}
export {getSpaseXData};