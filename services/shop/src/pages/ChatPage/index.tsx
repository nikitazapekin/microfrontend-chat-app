import ChatMain from "@/components/ChatMain";
import ListOfUsers from "@/components/ListOfUsers";
import Header from "@/components/header";
import styles from "./index.module.scss"
const ChatPage = () => {
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