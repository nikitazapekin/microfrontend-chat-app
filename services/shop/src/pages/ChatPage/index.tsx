import ChatMain from "@/components/ChatMain";
import ListOfUsers from "@/components/ListOfUsers";
import Header from "@/components/header";
import styles from "./index.module.scss"
import { useEffect } from "react";
import AuthService from "@packages/shared/API/auth";
const ChatPage = () => {
    useEffect(() => {
        console.log("get")
        AuthService.getUserData()
    }, [])


    return (
        <>
            <div className={styles.page}>
                <Header />
                <ChatMain />
            </div>
        </>
    );
}

export default ChatPage;