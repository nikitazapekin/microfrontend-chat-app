import {AppDispatch} from "../store";
import axios from "axios";
import AuthSlice from "../slices/AuthSlice";
import { setIsAuthorized } from "../slices/IsUnauthorized";
 interface IsUnauthorizedProps {
      isUnauthorized: boolean
    }
export const IsUnauthorizedAction =(isUnauthorized:IsUnauthorizedProps)=>(dispatch: AppDispatch )  => {
 dispatch(setIsAuthorized(isUnauthorized))
}
 