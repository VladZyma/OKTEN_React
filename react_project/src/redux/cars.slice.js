import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carsService} from "../services";

const initialState = {
    cars: [],
    loading: false,
    error: null,
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: carsReducer, actions: {}} = carsSlice;
const carActions ={getAll}
export {carsReducer, carActions}