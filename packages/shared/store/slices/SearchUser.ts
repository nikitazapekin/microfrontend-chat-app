import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface SearchUserTypes {
    isOpen: boolean
}
const initialState: SearchUserTypes = {
   isOpen: false
};

const SearchUser = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {

        },
        setError(state, action: PayloadAction<string | null>) {

        },
        setOpen(state) {
           state.isOpen = !state.isOpen
        }
    },
});

export const { setLoading, setError, setOpen } = SearchUser.actions;
export default SearchUser.reducer;

