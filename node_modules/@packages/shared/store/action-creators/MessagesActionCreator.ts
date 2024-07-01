import {AppDispatch} from "../store";
 import { setLastMessage, setMsges, setAddToListLastMessage } from "../slices/Messages";
interface MessageData {
    from: string;
    to: string;
    message: string;
    time: string;
}
 interface MessagesProps {
   messages: MessageData[]
    }
export const MessagesAction =(messages:MessagesProps)=>(dispatch: AppDispatch )  => {
 dispatch(setMsges(messages.messages))
}
export const AddLastMessagesAction =(message:MessageData)=>(dispatch: AppDispatch )  => {
    dispatch(setLastMessage(message))
   }
export const AddToListLastMessageAction =(message:MessageData)=>(dispatch: AppDispatch )  => {
    dispatch(setAddToListLastMessage(message))
   }
    