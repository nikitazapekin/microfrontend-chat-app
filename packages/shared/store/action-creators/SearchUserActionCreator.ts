import { AppDispatch } from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";
import { setSearch } from "../slices/SearchUser";
import SearchService from "../../API/search";
interface Props {
    username: string
}
export const SearchUserActionCreator = (username: Props) => (dispatch: AppDispatch) => {
    SearchService.getUsersData(username.username).then(res => {
        dispatch(setSearch(res.data.users))
    })

}
