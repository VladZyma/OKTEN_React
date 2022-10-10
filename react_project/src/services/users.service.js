import {axiosJsonService} from "./axios.json.service";
import {urlsJson} from "../configs";

const usersService = {
    getAll: () => axiosJsonService.get(urlsJson.users),
    getById: (id) => axiosJsonService.get(`${urlsJson.users}/${id}`),
}

export {usersService}