import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  username: string,
  tel: string,
  country: string
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  username: "",
  tel: "",
  country: ""
};

const AuthSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setAuth(state, action: PayloadAction<string>){ 

    }
  },
});

export const { setLoading, setError, setAuth  } = AuthSlice.actions;
export default AuthSlice.reducer;
