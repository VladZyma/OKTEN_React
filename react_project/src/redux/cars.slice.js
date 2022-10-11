import {createSlice, createAsyncThunk,} from '@reduxjs/toolkit';

import {carsService} from "../services";



const initialState = {
    cars: [],
    carForUpdate: null,
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
const addCar = createAsyncThunk(
    'carsSlice/addCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.addCar(car);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);
const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);
const sendCarForUpdate = createAsyncThunk(
    'carsSlice/sendCarForUpdate',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.updateById(id, car);
            return data;
        }
        catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);


const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        addCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
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
            .addCase(addCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                let carIndex = state.cars.findIndex(car => car.id === action.payload);
                state.cars.splice(carIndex, 1);
            })
            .addCase(sendCarForUpdate.fulfilled, (state, action) => {
                const foundCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(foundCar, action.payload);
            })
});

const {reducer: carsReducer, actions: {addCarForUpdate}} = carsSlice;
const carActions ={getAll, addCar, deleteCar, addCarForUpdate, sendCarForUpdate}
export {carsReducer, carActions}