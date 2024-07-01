

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface PersonalInformationTypes {
  access_token: string,
  avatar: string,
  chats: null,
  country: string,
  description: string,
  tel: string,
  username: string
}
const initialState: PersonalInformationTypes = {
  access_token: "",
  avatar: "",
  chats: null,
  country: "",
  description: "",
  tel: "",
  username: ""
};

const PersonalInformationSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPersonalInformation(state, action: PayloadAction<PersonalInformationTypes>) {
      state.username = action.payload.username
      state.avatar= action.payload.avatar
      state.country = action.payload.country
      state.tel = action.payload.tel
      state.description = action.payload.description
    }
  },
});

export const { setPersonalInformation } = PersonalInformationSlice.actions;
export default PersonalInformationSlice.reducer;
 