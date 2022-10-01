import {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((item, index) => index !== action.index);
    }
}
const useDogReducer = () => useReducer(reducer, []);

export {useDogReducer}