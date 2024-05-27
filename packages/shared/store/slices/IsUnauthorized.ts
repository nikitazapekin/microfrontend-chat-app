import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {

  isUnauthorized: boolean
}

const initialState: AuthState = {
  isUnauthorized: false,
};

const IsUnauthorized = createSlice({
  name: 'app',
  initialState,
  reducers: {

    setIsAuthorized(state, action: PayloadAction<AuthState>) {
      state.isUnauthorized = action.payload.isUnauthorized
    }
  },
});
export const { setIsAuthorized } = IsUnauthorized.actions;
export default IsUnauthorized.reducer;
