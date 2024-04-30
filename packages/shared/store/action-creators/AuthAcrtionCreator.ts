import {AppDispatch} from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

import { setAuth } from "../slices/AuthSlice";
interface Props {
    username: string, 
    country: string, 
    tel: string
}
export const TypePersonalData =(data: Props)=>(dispatch: AppDispatch )  => {
 dispatch(setAuth(data))
}
 