

import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import styles from "./index.module.scss";
import { useAppDispatch } from '@/hooks/redux';
import { useEffect, useState } from "react";
import { IsUnauthorizedAction } from "@packages/shared/store/action-creators/IsAuthorizedActionCreator";
import axios from "axios";
import { useSelector } from 'react-redux';
import { authSelector } from "@packages/shared/store/selectors/auth.selector";
import { selectedChatSelector } from "@packages/shared/store/selectors/selectedChat.selector";
import { AddLastMessagesAction } from "@packages/shared/store/action-creators/MessagesActionCreator";
import EmojiWhileHovering from "../EmojiWhileHovering";
import { time } from "console";
const ChatMain = () => {
    const authData = useSelector(authSelector);
    const isSelected = useSelector(selectedChatSelector)
    const dispatch = useAppDispatch();
    const URL_WEB_SOCKET = `ws://localhost:5000/ws?user=${authData.username}`;
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState("");
    useEffect(() => {
        let socket = new WebSocket(URL_WEB_SOCKET);
        setWs(socket);
        socket.onopen = () => {
            socket.send(JSON.stringify({ connectedUser: authData.username }))
        };
        socket.onclose = event => {
            socket.send("Client Closed!");
        };
        socket.onmessage = (event) => {
            dispatch(AddLastMessagesAction(event.data))
        };
        socket.onerror = error => {
            console.log("Socket Error: ", error);
        }
        return () => {
            socket.close();
        };
    }, []);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            dispatch(IsUnauthorizedAction({ isUnauthorized: false }));
        }
    }, [dispatch]);
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_API_BASE_URL}/${`chat`}/token-start?user=${authData.username}`)
            .then(response => {
                console.log('Ответ от сервера TOKEN START:', response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при запросе:', error);
            });
    }, [authData.username]);
    const handleSendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ from: authData.username, message: message, to: isSelected.user, time: "" }));
            dispatch(AddLastMessagesAction({ from: authData.username, message: message, to: isSelected.user, time: "" }))
            setMessage("");
        }
    };
    const handleSetMessage = (value: string) => {
        setMessage(value)
    }
    return (
        <>
            <div className={styles.container}>
                <ListOfUsers />
                <ChatWithUser handleSendMessage={handleSendMessage} handleSetMessage={handleSetMessage} />
                <SessionModal />
            </div>


        </>
    );
};

export default ChatMain;