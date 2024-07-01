import {AppDispatch} from "../store";
import { setOpen } from "../slices/SidebarSlice";
export const SidebarAction =()=>(dispatch: AppDispatch )  => {
 dispatch(setOpen())
}
 