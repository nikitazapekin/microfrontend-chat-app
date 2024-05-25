import { AppDispatch } from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

//import { setAuth } from "../slices/AuthSlice";
import { setOpen } from "../slices/SidebarSlice";
import PersonalService from "@packages/shared/API/personal"
import { setPersonalInformation } from "../slices/PersonalInformationSlice";
interface Props {
    username: string,
    country: string,
    tel: string
}



export const PersonalInformationAction = () => async (dispatch: AppDispatch) => {

    try {
        const token = localStorage.getItem("token");
    
        const response = await PersonalService.getPersonalData();
      
    } catch (e) {
        console.log("error" + e);
    }
}


export const PersonalInformationByUsernameAction = (username: string) => async (dispatch: AppDispatch) => {

    try {
        const response = await PersonalService.getPersonalDataByUsername(username);
     dispatch(setPersonalInformation(response.data))
    } catch (e) {
        console.log("error" + e);
    }
}

/*

    "access_token": "newAccessToken",
        "username":     foundUsername,
        "country":      country,
        "tel":          tel,
        "chats":        chats,
        "avatar":       avatar,
        "description": " description",
        */