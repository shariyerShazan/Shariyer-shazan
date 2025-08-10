import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../data';

const initialState = {
  activeTheme: themes[0], 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setActiveTheme(state, action) {
      state.activeTheme = action.payload;
    },
  },
});

export const { setActiveTheme } = themeSlice.actions;
export default themeSlice.reducer;
