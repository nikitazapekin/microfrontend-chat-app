import {AppDispatch} from "../store";
import { setAuth } from "../slices/AuthSlice";
interface Props {
    username: string, 
    country: string, 
    tel: string
}
export const TypePersonalData =(data: Props)=>(dispatch: AppDispatch )  => {
 dispatch(setAuth(data))
}
 