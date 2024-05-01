import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
const ChatMain = () => {

    return ( 
        <>
        <div className={styles.container}>
        <ListOfUsers />
        <ChatWithUser />
        {/*
        <Sidebar />
    */}
        </div>
        </>
     );
}
 
export default ChatMain;