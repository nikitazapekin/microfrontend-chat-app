import { AppDispatch } from "../store";

import axios from "axios";
import AuthSlice from "../slices/AuthSlice";

//import { setAuth } from "../slices/AuthSlice";
import { setSearch } from "../slices/SearchUser";
import SearchService from "../../API/search";
interface Props {
    //  username: string, 
    // country: string, 
    //  tel: string
    username: string
}

export const SearchUserActionCreator = (username: Props) => (dispatch: AppDispatch) => {
    console.log("USS" + JSON.stringify(username))
    SearchService.getUsersData(username.username).then(res => {
        console.log("RESssssssssss" + JSON.stringify(res))

        console.log("RESssssssssss users" + JSON.stringify(res.data))

        console.log("RESssssssssss users" + JSON.stringify(res.data.users))
        console.log("RESssssssssss users" + JSON.stringify(res.data.users[0].username))
      //  console.log("RESssssssssss users" + JSON.stringify(res.data.data.users))
   //     console.log("RES 000000000000" + JSON.stringify(res.data[0]))
     //   console.log("RES" + JSON.stringify(res.data[0].avatar))


     //   console.log("RES" + JSON.stringify(typeof res.data[0].avatar))
    //    console.log("RES" + JSON.stringify(res.data[0].avatar.color))
        dispatch(setSearch(res.data.users))
    })

}
