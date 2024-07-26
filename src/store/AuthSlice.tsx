import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface AuthState {
    email: string,
    isLogin: boolean,
    id: number
}

const initialState: AuthState = {
    email: "",
    isLogin: false,
    id: 0
}


// const loginCheck = createAsyncThunk("auth/loginCheck", async () => {
//     let token = localStorage.getItem("token")
   
//     if(token){
//         let response = await axios.post("http://localhost:8080/check", {token})
//         return response.data
//     }
//     else{
//         return null
//     }

// })


export const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {
        login: (state:any, action:any) => {
            state.email = action.payload.email;
            state.isLogin = true;
            state.id = action.payload.id;
        },
        logout: (state:any) => {
            state.email = "";
            state.isLogin = false;
            state.id = 0;
        }
    }
})


export default authSlice.reducer






//ACTION -> TYPE-PAYLOAD