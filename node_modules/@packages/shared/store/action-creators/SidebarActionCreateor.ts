import {AppDispatch} from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

//import { setAuth } from "../slices/AuthSlice";
import { setOpen } from "../slices/SidebarSlice";
interface Props {
    username: string, 
    country: string, 
    tel: string
}
export const SidebarAction =()=>(dispatch: AppDispatch )  => {
 dispatch(setOpen())
}
 