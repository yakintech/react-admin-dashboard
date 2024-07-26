import { createSlice } from "@reduxjs/toolkit"

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