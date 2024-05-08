import {AppDispatch} from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

//import { setAuth } from "../slices/AuthSlice";
//import { setOpen } from "../slices/SidebarSlice";
import { setIsAuthorized } from "../slices/IsUnauthorized";
 interface IsUnauthorizedProps {

    /*  username: string,
      country: string,
      tel: string, */
    
      isUnauthorized: boolean
     // password: string
    }
export const IsUnauthorizedAction =(isUnauthorized:IsUnauthorizedProps)=>(dispatch: AppDispatch )  => {
 //dispatch(setOpen())
 dispatch(setIsAuthorized(isUnauthorized))
}
 