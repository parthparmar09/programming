import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import carsReducer from "./slices/carSlice";


export default configureStore({
    reducer:{
        user:userReducer,
        cars:carsReducer
    }
})