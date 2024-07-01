import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface MessageData {
    from: string;
    to: string;
    message: string;
    time: string;
}
export interface MessagesState {
    messages: MessageData[]
}
const initialState: MessagesState = {
    messages: []
};
const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMsges(state, action: PayloadAction<MessageData[]>) {
            state.messages = action.payload
        },
        setLastMessage(state, action: PayloadAction<MessageData>) {
            state.messages.push(action.payload)
        },
        setAddToListLastMessage(state, action: PayloadAction<MessageData>) {
            state.messages.push(action.payload)
        }
    },
});

export const { setMsges, setLastMessage, setAddToListLastMessage } = MessagesSlice.actions;
export default MessagesSlice.reducer;
