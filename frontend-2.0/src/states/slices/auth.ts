import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState["user"]>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            console.log(state);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authReducer;
export default authSlice.reducer;