

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface SidebarTypes {
    // isLoading: boolean;
    // error: string | null;
    isOpen: boolean
}

const initialState: SidebarTypes = {
    // isLoading: false,
    // error: null,
    isOpen: false
};

const SidebarSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            // state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            //   state.error = action.payload;
        },
    //    setOpen(state, action: PayloadAction<boolean>) {
        setOpen(state) {
            state.isOpen = !state.isOpen
        }
    },
});

export const { setLoading, setError, setOpen } = SidebarSlice.actions;
export default SidebarSlice.reducer;
