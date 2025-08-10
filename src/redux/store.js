import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./themeSlice"

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
