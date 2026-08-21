import { configureStore } from "@reduxjs/toolkit";

import formReducer from './slice/FormSlices.js';

const store = configureStore({
    reducer:{
        formState: formReducer,
    },
});

export default store;