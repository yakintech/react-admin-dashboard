import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface AuthState {
    isloading: boolean,
    email: string,
    isLogin: boolean,
    id: number
}

const initialState: AuthState = {
    email: "",
    isLogin: false,
    id: 0,
    isloading: true
}



export const loginCheck = createAsyncThunk("auth/loginCheck", () => {
    let token = localStorage.getItem("token")

    return axios.get("http://localhost:8080/check", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    ).then(res => res.data)


})


export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state: any, action: any) => {
            state.email = action.payload.email;
            state.isLogin = true;
            state.id = action.payload.id;
            state.isloading = false;
        },
        logout: (state: any) => {
            state.email = "";
            state.isLogin = false;
            state.id = 0;
            state.isloading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginCheck.fulfilled, (state, action) => {
            state.isLogin = true;
            state.isloading = false;
        })
        builder.addCase(loginCheck.rejected, (state, action) => {
            state.isLogin = false;
            state.isloading = false;
        })
        builder.addCase(loginCheck.pending, (state, action) => {
            state.isloading = true;
        })
    }
})


export default authSlice.reducer






//ACTION -> TYPE-PAYLOAD