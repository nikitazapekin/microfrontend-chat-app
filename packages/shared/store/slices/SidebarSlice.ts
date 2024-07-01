
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface SidebarTypes {
    isOpen: boolean
}
const initialState: SidebarTypes = {
   isOpen: false
};

const SidebarSlice = createSlice({
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

export const { setLoading, setError, setOpen } = SidebarSlice.actions;
export default SidebarSlice.reducer;
