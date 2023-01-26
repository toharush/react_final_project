import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        admin: false,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, user: action.payload }
        },
        setAdmin: (state, action) => {
            return {...state, admin: action.payload}
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload }
        },
        setError: (state, action) => {
            return { ...state, error: action.payload }
        }
    },
});

export const { setLoading, setError, setUser, setAdmin } = tokenSlice.actions;
export default tokenSlice.reducer;