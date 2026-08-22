import {
    addTodo,
    removeTodo,
    toggleTodo,
} from "./todo.js";

const DELAY = 1000;

export const addTodoAsync = (todo) => (dispatch) => {
    setTimeout(() => {
        dispatch(addTodo(todo));
    }, DELAY);
};

export const removeTodoAsync = (id) => (dispatch) => {
    setTimeout(() => {
        dispatch(removeTodo(id));
    }, DELAY);
};

export const toggleTodoAsync = (id) => (dispatch) => {
    setTimeout(() => {
        dispatch(toggleTodo(id));
    }, DELAY);
};