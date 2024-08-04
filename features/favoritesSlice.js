import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter((city) => city.id !== action.payload.id);
        },
        toggleFavorite: (state, action) => {
            const existingIndex = state.findIndex((city) => city.id === action.payload.id);
            if (existingIndex >= 0) {
                state.splice(existingIndex, 1);
            } else {
                state.push(action.payload);
            }
        }
    },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
