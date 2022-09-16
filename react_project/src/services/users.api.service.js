import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getAllUsers = () => {
    return axiosInstance.get('/users');
}
const getUserDetails = (id) => {
    return axiosInstance.get('/users/' +id);
}

export {getAllUsers, getUserDetails};