import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log(action.payload);
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            console.log(state);
            state.isLoggedIn = false;
            state.user = null;
            console.log(state);
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
