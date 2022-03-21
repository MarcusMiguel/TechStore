import { createSlice, } from "@reduxjs/toolkit";

interface User {
    _id: string,
    title: string,
    desc: string,
    img: string,
    price: number,
}

interface UserState {
    currentUser: User | null,
    isFetching: Boolean,
    error: Boolean,
}

const initialState: UserState = {
    currentUser: null,
    isFetching: false,
    error: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer;