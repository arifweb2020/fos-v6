import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { endPointUrl } from './../../common/api/endPointUrl';


const initialState = {
    status: null,
    loading: true,
    data: [],
}

export const userAsync = createAsyncThunk(
    'users/userlist',
    async (args) => {
        const res = await axios.get(`${endPointUrl}/users`)
        return res?.data
    }
)

export const testSlice = createSlice({

    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userAsync.pending, (state) => {
                state.data = null;
                state.loading = true;
                state.status = "pending";
            })
            .addCase(userAsync.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.status = "success";
            })
            .addCase(userAsync.rejected, (state) => {
                state.data = null;
                state.loading = true;
                state.status = "rejected";
            })
    }


})

export default testSlice.reducer


