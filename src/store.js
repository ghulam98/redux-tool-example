import { configureStore } from "@reduxjs/toolkit";
import costumReducer from "./reducer";

const store = configureStore({
    reducer:{
        custom: costumReducer
    },
})
export default store