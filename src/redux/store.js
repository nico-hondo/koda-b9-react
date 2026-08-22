import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistCombineReducers,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/es/storage";

import formReducer from "./slice/FormSlices.js";
import todoReducer from "./slice/todo.js";

const persistFormConfig = {
    key: "form_config",
    storage,
    whitelist: ["formState"],
};

const persistTodoConfig = {
    key: "data",
    storage,
};

const store = configureStore({
    reducer: persistCombineReducers(persistFormConfig, {
        formState: formReducer,

        todoState: persistReducer(persistTodoConfig, todoReducer),
    }),
    devTools: import.meta.env.VITE_ENVIRONMENT === "development",
});

export const persistor = persistStore(store);

export default store;