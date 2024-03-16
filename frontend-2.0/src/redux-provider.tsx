"use client"
import { Provider } from "react-redux";
import { store } from "../src/states/store"; // Fixed import statement
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}1