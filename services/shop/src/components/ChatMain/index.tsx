import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import styles from "./index.module.scss"
const ChatMain = () => {
    return ( 
        <>
        <div className={styles.container}>
        <ListOfUsers />
        <ChatWithUser />
        </div>
        </>
     );
}
 
export default ChatMain;