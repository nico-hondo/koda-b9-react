import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    lastId: 0,
};

const todoSlice = createSlice({
    name: "todos",

    initialState,

    reducers: {
        addTodo: (state, { payload }) => {
            const newTodo = {
                ...payload,
                id: state.lastId + 1,
                isFinish: false,
            };

            state.todo.push(newTodo);
            state.lastId++;
        },

        removeTodo: (state, { payload }) => {
            state.todo = state.todo.filter(
                (todo) => todo.id !== payload
            );
        },

        toggleTodo: (state, { payload }) => {
            const todo = state.todo.find(
                (todo) => todo.id === payload
            );

            if (todo) {
                todo.isFinish = !todo.isFinished;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo,} = todoSlice.actions;

export default todoSlice.reducer;