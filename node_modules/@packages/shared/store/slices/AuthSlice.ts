import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface AuthState {
  username: string,
  country: string,
  tel: string,
}

const initialState: AuthState = {
  username: "",
  country: "",
  tel: "",
};

const AuthSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
    },
    setError(state, action: PayloadAction<string | null>) {
    },
    setAuth(state, action: PayloadAction<AuthState>) {
      state.username = action.payload.username;
      state.country = action.payload.country;
      state.tel = action.payload.tel;
    }
  },
});
export const { setLoading, setError, setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
