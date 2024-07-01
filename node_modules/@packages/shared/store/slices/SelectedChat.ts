import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface AuthState {
    user: string,
    messages: Array<{
    }>,
    isSelected: boolean
}
export interface Payload {
    username: string
}
const initialState: AuthState = {
    user: "",
    messages: [],
    isSelected: false
};
const selectedChat = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedChat(state, action: PayloadAction<Payload>) {
            state.user = action.payload.username
            state.isSelected = true
        }
    },
});
export const { setSelectedChat } = selectedChat.actions;
export default selectedChat.reducer;
