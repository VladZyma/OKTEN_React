const baseURLJson = process.env.REACT_APP_API_JSON;
const baseURLCars = process.env.REACT_APP_API_CARS;

const urlsJson = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
}
const urlsCars = {
    cars: '/cars',
}

export {baseURLJson, baseURLCars, urlsJson, urlsCars}