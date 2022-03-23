import { createSlice, } from "@reduxjs/toolkit";

interface User {
    _id: string,
    username: string,
    isAdmin: boolean,
    email: string,
    accessToken: string
};

interface UserState {
    currentUser: User | null,
};

const initialState: UserState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    },

})

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;