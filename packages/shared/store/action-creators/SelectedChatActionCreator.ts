import {AppDispatch} from "../store";
import { setSelectedChat } from "../slices/SelectedChat";
interface Props {
    username: string, 
}
export const SelectedChaatActionCreator =(username: Props)=>(dispatch: AppDispatch )  => {
dispatch(setSelectedChat(username))
}
 