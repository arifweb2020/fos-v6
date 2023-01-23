import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { endPointUrl } from './../../common/api/endPointUrl';


const initialState = {
    status: null,
    loading: true,
    data: [],
    singleuser:{},
    userDetails:JSON.parse(localStorage.getItem('red')) || "-"
}


export const userAsync = createAsyncThunk(
    'users/userlist',
    async (args) => {
        const res = await axios.get(`${endPointUrl}/posts`)
        return res?.data
    }
)

export const singleuserAsync = createAsyncThunk(
    "users/singleuser",
    //dispatch(singleuserAsync(id)) if u r dispatching this way
    // async(id)=>{
    //     const res = await axios.get(`${endPointUrl}/posts/${id}`)
    //     return res?.data
    // }
    async({userId})=>{
        const res = await axios.get(`${endPointUrl}/posts/${userId}`)
        return res?.data
    }
)

export const testSlice = createSlice({

    name: "users",
    initialState,
    reducers: {
        // getUser(state){
        //    state.userDetails = JSON.parse(localStorage.getItem('red'))
        // }
    },
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
            .addCase(singleuserAsync.pending,(state)=>{
                state.singleuser = null;
                state.loading = true;
                state.status = "pending";
            })
            .addCase(singleuserAsync.fulfilled,(state,{payload})=>{
                state.singleuser = payload;
                state.loading = false;
                state.status = "success";
            })
            .addCase(singleuserAsync.rejected,(state)=>{
                state.singleuser = null;
                state.loading = true;
                state.status = "rejected";
            })
    }


})
//export const {getUser} = testSlice.actions;
export default testSlice.reducer


