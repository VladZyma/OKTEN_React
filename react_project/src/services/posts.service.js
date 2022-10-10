import {axiosJsonService} from "./axios.json.service";
import {urlsJson} from "../configs";

const postsService = {
    getAll: () => axiosJsonService.get(urlsJson.posts),
    getCommentsById: (id) => axiosJsonService.get(`${urlsJson.posts}/${id}${urlsJson.comments}`),
}

export {postsService}