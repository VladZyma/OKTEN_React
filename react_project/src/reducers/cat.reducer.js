import {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return state = [...state, action.payload];
        case 'delete':
           return state.filter((item, index) => index !== action.index)
    }
}

const useCatReducer = () => useReducer(reducer, []);

export {useCatReducer}