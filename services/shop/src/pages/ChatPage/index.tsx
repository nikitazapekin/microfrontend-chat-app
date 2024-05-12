import ChatMain from "@/components/ChatMain";
import ListOfUsers from "@/components/ListOfUsers";
import Header from "@/components/header";
import styles from "./index.module.scss"
import { useEffect } from "react";
import AuthService from "@packages/shared/API/auth";
import { useAppDispatch } from '@/hooks/redux';
import { PersonalInformationAction } from "@packages/shared/store/action-creators/PersonalInformationActionCreator"
import { useSelector } from 'react-redux';
import { sidebarSelector } from "@packages/shared/store/selectors/sidebar.selector"
import { isUnauthorizedSelector } from "@packages/shared/store/selectors/isUnauthorized.selector"
const ChatPage = () => {
    const isAuthorized = useSelector(isUnauthorizedSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("get")
        AuthService.getUserData()

    }, [])
    useEffect(() => {
        const tok = localStorage.getItem("token")
        console.log("TOKEN UNAUTHORIZED", tok)
        dispatch(PersonalInformationAction())
    }, [isAuthorized])
    return (
        <>
            <div className={styles.page}>
                <h1>

                    Is authorized {JSON.stringify(isAuthorized)}
                </h1>
                <Header />
                <ChatMain />
            </div>
        </>
    );
}

export default ChatPage;


/*
import { useSelector } from 'react-redux';
import { authSelector } from "@packages/shared/store/selectors/auth.selector"

import { isUnauthorizedSelector } from "@packages/shared/store/selectors/isUnauthorized.selector"


const Sidebar = () => {


    const data = useSelector(sidebarSelector)
    */