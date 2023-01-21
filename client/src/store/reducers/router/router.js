import { createSlice } from "@reduxjs/toolkit";

export const routerSlice = createSlice({
    name: 'router',
    initialState: {
        current: "home"
    },
    reducers: {
        setCurrent: (state, action) => {
            return { ...state, current: action.payload }
        },
    },
});

export const { setCurrent } = routerSlice.actions;
export default routerSlice.reducer;