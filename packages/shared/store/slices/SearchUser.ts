import { createSlice, PayloadAction } from '@reduxjs/toolkit';




interface Obj {
    text: string,
    color: string,
    url: string
}


type Users = Array<{
    username: string,
    country: string,
 //   avatar: string,
 //avatar: Obj
avatar: {
    text: string,
    color: string,
    url: string
},
    description: string,
    lastTimeOfBeingAtNetwork: string,
    message: string
    }>
export interface SearchUserTypes {
 users: Array<{
    username: string,
    country: string,
   avatar: {
    text: string,
    color: string,
    url: string
},
    description: string,
    lastTimeOfBeingAtNetwork: string,
    message: string
    }>
}
const initialState: SearchUserTypes = {
  // isOpen: false
  //users: []

  users: [] 
};

const SearchUser = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {

        },
        setError(state, action: PayloadAction<string | null>) {

        },
        setSearch(state, action: PayloadAction<Users> ) {
            state.users= []
            state.users = state.users.concat(action.payload)
        }
    },
});

export const { setLoading, setError, setSearch } = SearchUser.actions;
export default SearchUser.reducer;

