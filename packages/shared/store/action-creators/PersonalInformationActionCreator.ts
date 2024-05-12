import { AppDispatch } from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

//import { setAuth } from "../slices/AuthSlice";
import { setOpen } from "../slices/SidebarSlice";
import PersonalService from "@packages/shared/API/personal"
interface Props {
    username: string,
    country: string,
    tel: string
}



export const PersonalInformationAction = () => async (dispatch: AppDispatch) => {

    try {
        const token = localStorage.getItem("token");
        console.log("TOKEN FROM GET PERSONAL INFORMATION" + token);
        const response = await PersonalService.getPersonalData();
        console.log("GETTTTT" + JSON.stringify(response));
    } catch (e) {
        console.log("error" + e);
    }
}



//export const SidebarAction =()=>(dispatch: AppDispatch )  => {
//dispatch(setOpen())
//}
