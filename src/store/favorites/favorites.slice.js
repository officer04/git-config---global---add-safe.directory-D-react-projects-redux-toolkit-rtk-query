import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { item: [] },
  reducers: {
    toggleFavorite: (state, { payload: recipe }) => {
      const isExists = state.item.find((r) => r.id === recipe.id);
      if (isExists) {
        const del = state.item.filter((item) => item.id !== recipe.id);
        state.item = del;
      } else {
        state.item.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
