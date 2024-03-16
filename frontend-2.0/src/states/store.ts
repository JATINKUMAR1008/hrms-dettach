import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";

export const store = configureStore({
    reducer:{
        // Add reducers here
        authReducer: authSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;