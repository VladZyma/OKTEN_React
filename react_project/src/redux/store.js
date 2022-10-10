import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {userReducer} from "./users.slice";
import {postsReducer} from "./posts.slice";
import {carsReducer} from "./cars.slice";

const rootReducer = combineReducers({
    userReducer,
    postsReducer,
    carsReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}