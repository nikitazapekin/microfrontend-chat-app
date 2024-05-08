import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {

/*  username: string,
  country: string,
  tel: string, */

  isUnauthorized: boolean
 // password: string
}

const initialState: AuthState = {

 /* username: "",
  country: "",
  tel: "", */
  isUnauthorized: false,
 // password: ""
};

const IsUnauthorized = createSlice({
  name: 'app',
  initialState,
  reducers: {

    setIsAuthorized(state, action: PayloadAction<AuthState>) {
        console.log("OAYLOAD"+action.payload.isUnauthorized)
state.isUnauthorized = action.payload.isUnauthorized
    }
  },
});
export const {  setIsAuthorized } =IsUnauthorized.actions;
export default IsUnauthorized.reducer;
