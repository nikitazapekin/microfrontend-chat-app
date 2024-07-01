import styles from "./index.module.scss"
import Tick from "../../assets/tick 2.png"
import ChatKeypad from "../ChatKeypad"
import { useEffect } from "react"
import { useSelector } from 'react-redux';
import { selectedChatSelector } from "@packages/shared/store/selectors/selectedChat.selector"
import { authSelector } from "@packages/shared/store/selectors/auth.selector";
import { useState } from "react";
import { AddToListLastMessageAction, MessagesAction } from "@packages/shared/store/action-creators/MessagesActionCreator"
import { useAppDispatch } from '@/hooks/redux';
import { messagesSelector } from "@packages/shared/store/selectors/messages.selector"
interface ChatWithUserProps {
    handleSendMessage: () => void;
    handleSetMessage: (message: string) => void;
}
interface MessageData {
    from: string;
    to: string;
    message: string;
    time: string;
}
const ChatWithUser = ({ handleSendMessage, handleSetMessage }: ChatWithUserProps) => {
    const dispatch = useAppDispatch()
    const messages = useSelector(messagesSelector).messages
    const isSelected = useSelector(selectedChatSelector)
    const authData = useSelector(authSelector);
    const URL_WEB_SOCKET = `ws://localhost:5000/ws/chat?user=${authData.username}&companion=${isSelected.user}`;
    const [ws, setWs] = useState(null);
    useEffect(() => {
        let socket = new WebSocket(URL_WEB_SOCKET);
        setWs(socket);
        socket.onopen = () => {
            console.log("Successfully Connected");
            socket.send(JSON.stringify({ connectedUser: authData.username }))
        };
        socket.onclose = event => {
            socket.send("Client Closed!");
        };
        socket.onmessage = (event: MessageEvent) => {
            try {
                const data: MessageData[] | MessageData = JSON.parse(event.data);
                if (Array.isArray(data)) {
                    dispatch(MessagesAction({ messages: data }))

                } else {
                    dispatch(AddToListLastMessageAction(data))
                }

            } catch (error) {
                console.error("Error parsing message data:", error);
            }
        };
        socket.onerror = error => {
            console.log("Socket Error: ", error);
        }
        return () => {
            socket.close();
        };
    }, [isSelected]);
    useEffect(() => {
        const token = localStorage.getItem('token')
    }, [])
    return (
        <div className={styles.chat}>
            {isSelected.isSelected && (
                <ChatKeypad handleSendMessage={handleSendMessage} handleSetMessage={handleSetMessage} />
            )}
            <div className={styles.chat__inner}>
                {!isSelected.isSelected ? (
                    <div className={styles.chat__select__chat}>
                        Select any chat to start messageing
                    </div>
                ) : (
                    <div className={styles.messages}>
                        {messages && (
                            <>
                                {messages.map((item, index) => (
                                    <div 
                                    key={index} className={styles.message}>
                                        <div className={styles.message__right}
                                        style={{backgroundColor:     item.from==isSelected.user ? "#F1F1F1" : "#EFFDDE"}} 
                                        >
                                            <p className={styles.message__title}>
                                                {item.from}
                                            </p>
                                            <p className={styles.message__content}>
                                                {item.message}
                                            </p>
                                            <div className={styles.message__time__block}>
                                                <p className={styles.message__time}>
                                                    {item.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
}


export default ChatWithUser;