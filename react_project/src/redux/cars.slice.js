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
            console.log(id);
            const {data} = await carsService.updateById(id, car);
            return data;
            console.log(data);
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
            //========= getAll ==================
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

            //========= addCar ====================
            .addCase(addCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.loading = false;
            })
            .addCase(addCar.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addCar.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            //========= deleteCar ====================
            .addCase(deleteCar.fulfilled, (state, action) => {
                let carIndex = state.cars.findIndex(car => car.id === action.payload);
                state.cars.splice(carIndex, 1);
                state.loading = false;
            })
            .addCase(deleteCar.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteCar.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            //========= sendCarForUpdate ====================
            .addCase(sendCarForUpdate.fulfilled, (state, action) => {
                const foundCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(foundCar, action.payload);
                state.loading = false;
            })
            .addCase(sendCarForUpdate.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(sendCarForUpdate.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: carsReducer, actions: {addCarForUpdate}} = carsSlice;
const carActions ={getAll, addCar, deleteCar, addCarForUpdate, sendCarForUpdate}
export {carsReducer, carActions}