

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface PersonalInformationTypes {
    // isLoading: boolean;
    // error: string | null;
  //  isOpen: boolean


  access_token: string,
  avatar: string,
  chats: null,
  country: string,
  description: string,
  tel: string ,
  username:string
}

const initialState: PersonalInformationTypes = {
 
   // isOpen: false
   access_token: "",
   avatar: "",
   chats: null,
   country: "",
   description: "",
   tel: "" ,
   username:""
};

const PersonalInformationSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
          
        },
        setError(state, action: PayloadAction<string | null>) {
         
        },
    
        setOpen(state) {
          //  state.isOpen = !state.isOpen
        }
    },
});

export const { setLoading, setError, setOpen } = PersonalInformationSlice.actions;
export default PersonalInformationSlice.reducer;
