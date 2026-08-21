import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form: [],
    lastId: 0,
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        submitToForm: (prevState, { payload}) => {
            const newSurvey = {
                ...payload,
                id: prevState.lastId + 1,
            }
            prevState.form.push(newSurvey);
            prevState.lastId++;
        },
        removeFromSurvei: (prevState, {payload}) => {
            return{
                ...prevState,
                form: prevState.form.filter((survei) => {
                    return survei.id !== payload.id;
                }),
            }
        }
    }
})

export const{submitToForm, removeFromSurvei} = formSlice.actions;

export default formSlice.reducer;