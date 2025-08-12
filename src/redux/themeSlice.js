import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../data';

const initialState = {
  activeTheme: themes[0], 
  darkTheme: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setActiveTheme(state, action) {
      state.activeTheme = action.payload;
    },
    setDarkTheme(state , action){
      state.darkTheme = action.payload
    }
  },
});

export const { setActiveTheme , setDarkTheme} = themeSlice.actions;
export default themeSlice.reducer;
