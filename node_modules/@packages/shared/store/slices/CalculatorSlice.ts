import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface StoreThemeState {
    arrayOfExpressions: String[]
  }
  const initialState: StoreThemeState = {
    arrayOfExpressions: []
  }
export const calculatorSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addExpressionToHistory: (state, action: PayloadAction<string>): void => {
        }
    },
 
})

export default calculatorSlice.reducer;