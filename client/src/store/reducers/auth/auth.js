import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            return { ...state, loading: action.payload }
        },
        setError: (state, action) => {
            return { ...state, error: action.payload }
        }
    },
});

export const { setLoading, setError } = tokenSlice.actions;
export default tokenSlice.reducer;