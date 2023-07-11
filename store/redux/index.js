import favoriteSlice from "./favorites-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: favoriteSlice.reducer,
});
