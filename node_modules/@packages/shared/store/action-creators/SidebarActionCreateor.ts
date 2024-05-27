import {AppDispatch} from "../store";
import { setOpen } from "../slices/SidebarSlice";
interface Props {
    username: string, 
    country: string, 
    tel: string
}
export const SidebarAction =()=>(dispatch: AppDispatch )  => {
 dispatch(setOpen())
}
 