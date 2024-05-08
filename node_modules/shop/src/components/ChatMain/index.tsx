import { useEffect, useState } from "react";
import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
import PersonalService from "@packages/shared/API/personal"
import {IsUnauthorizedAction} from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"
import { useAppDispatch } from '@/hooks/redux';
const ChatMain = () => {
const dispatch = useAppDispatch()
 useEffect(()=> {
   if(!localStorage.getItem('token')) {
    console.log("НЕ АВТООООООООООООООООООРИЗОООООООООООВАН")
    dispatch(IsUnauthorizedAction({isUnauthorized: false}))
   }
}, []) 
 

    return ( 
        <>
        <div className={styles.container}>
        <ListOfUsers />
        <ChatWithUser />
        <SessionModal />

        </div>
        </>
     );
}
 
export default ChatMain;