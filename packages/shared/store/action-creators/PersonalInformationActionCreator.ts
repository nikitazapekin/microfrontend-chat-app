import { AppDispatch } from "../store";
import PersonalService from "@packages/shared/API/personal"
import { setPersonalInformation } from "../slices/PersonalInformationSlice";
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