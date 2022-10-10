import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {postsService} from "../services";


const initialState = {
    posts: [],
    postBody: null,
    postComments: null,
    loading: false,
    error: null,
}

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);
const getCommentsById = createAsyncThunk(
    'postsSlice/getCommentsById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getCommentsById(id);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        readPost: (state, action) => {
            state.postBody = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getCommentsById.fulfilled, (state, action) => {
                state.postComments = action.payload;
                state.loading = false;
            })
            .addCase(getCommentsById.pending, (state, action) => {
                state.loading = true;
            })
});

const {reducer: postsReducer, actions: {readPost}} = postsSlice;
const postActions = {getAll, readPost, getCommentsById}
export {postsReducer, postActions}