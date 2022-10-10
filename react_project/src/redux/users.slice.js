import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {usersService} from "../services";

const initialState = {
    users: [],
    userPhone: null,
    userDetails: null,
    loading: false,
    error: null,
}

const getAll = createAsyncThunk(
    'usersSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);
const getDetailsById = createAsyncThunk(
    'usersSlice/getDetailsById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getById(id);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getPhone: (state, action) => {
            state.userPhone = action.payload;
        },
        deleteById: (state, action) => {
            const userIndex = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(userIndex, 1);
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getDetailsById.fulfilled, (state, action) => {
                state.userDetails = action.payload;
            })
});

const {reducer: userReducer, actions: {getPhone, deleteById}} = usersSlice;
const userActions = {getAll, getPhone, getDetailsById, deleteById}
export {userReducer, userActions}