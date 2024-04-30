/*import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
 theme:  "rgba(35, 36, 35)" | "#fff";
 themeOfText:  "rgba(35, 36, 35)" | "#fff";
 themeOfNavBar: "rgba(10, 10, 10)" | "rgba(32, 33, 32)";
 test: "Hello" | "Goodbye";
 tt: number
    }
const initialState: ThemeState = {
  theme: "rgba(35, 36, 35)",
  themeOfText: "#fff",
  themeOfNavBar: "rgba(10, 10, 10)",
  test: "Hello",
   tt: 0
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      switchToDarken: (state) => {
            state.theme =  "rgba(35, 36, 35)";
            state.themeOfText="#fff"
            state.themeOfNavBar= "rgba(32, 33, 32)" 
        },
        switchToLighter: (state) => {
          state.theme =  "#fff";
          state.themeOfText="rgba(35, 36, 35)"
          state.themeOfNavBar= "rgba(10, 10, 10)" 
      },
      test: (state) => {
          state.test="Goodbye"
      },
      tt:(state) => {
        state.tt++
      }
      
    },
 
})

export default themeSlice.reducer;

*/


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppStatee {
  isLoading: boolean;
  error: string | null;
}

const initialState: AppStatee = {
  isLoading: false,
  error: null,
};

const appSlicee = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError} = appSlicee.actions;
export default appSlicee.reducer;
