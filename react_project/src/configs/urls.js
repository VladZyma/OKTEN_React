const baseURL = process.env.REACT_APP_API;

const urls = {
    users: '/users',
    cars: '/cars',
    auth: {
        login: '/auth',
        refresh: '/auth/refresh',
    },
}

export {
    baseURL,
    urls,
}