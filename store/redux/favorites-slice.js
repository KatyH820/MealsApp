import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { id: [] },
  reducers: {
    addFavorite(state, action) {
      state.id.push(action.payload);
    },
    removeFavorite(state, action) {
      state.id.splice(state.id.indexOf(action.payload), 1);
    },
  },
});

export const favoriteAction = favoriteSlice.actions;
export default favoriteSlice;
