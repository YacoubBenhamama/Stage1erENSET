import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Authentification'

const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer
    }
});

export default store ;