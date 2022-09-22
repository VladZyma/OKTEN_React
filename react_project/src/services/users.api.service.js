import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const usersService = {
    getAll: () => axiosInstance.get('/users'),
    getUserPosts: (userId) => axiosInstance.get(`/users/${userId}/posts`),
    createUser: (user) => axiosInstance.post('/users', user),
}

export {usersService};