import { AppDispatch } from "../store";
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
