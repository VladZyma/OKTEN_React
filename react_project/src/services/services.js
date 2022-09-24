import {axiosInstance} from "./axios.service";
import {urls} from '../config';

const service = {
    getToDo: () => axiosInstance.get(urls.todos),
    getAlbums: () => axiosInstance.get(urls.albums),
    getComments: () => axiosInstance.get(urls.comments),
    getPostById: (id) => axiosInstance.get(`${urls.posts}/${id}`),
}

export {service}