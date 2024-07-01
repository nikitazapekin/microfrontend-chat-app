
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
