/*

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
import EmojiWhileHovering from "../EmojiWhileHovering";
const ChatMain = () => {
    const authData = useSelector(authSelector);
    const isSelected = useSelector(selectedChatSelector)
    const dispatch = useAppDispatch();
    const URL_WEB_SOCKET = 'ws://127.0.0.1:5000/ws';
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState("");
    useEffect(() => {
        let socket = new WebSocket(URL_WEB_SOCKET);
        setWs(socket);
        console.log("Attempting Connection...");
        socket.onopen = () => {
            console.log("Successfully Connected");
            socket.send(JSON.stringify({ connectedUser: authData.username }))
        };
        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
            socket.send("Client Closed!");
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
        axios.get(`http://localhost:5000/${`chat`}/token-start?user=${authData.username}`)
            .then(response => {
                console.log('Ответ от сервера TOKEN START:', response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при запросе:', error);
            });
    }, [authData.username]);
    const handleSendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {

            console.log("SENDDDD")
        //    ws.send(JSON.stringify({ name: authData.username, message: message, to: isSelected.user }));
        ws.send(JSON.stringify({ name: "authData.username", message:" message", to: "isSelected.user" }));
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
                <div className={styles.chatInputContainer}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => handleSetMessage(e.target.value)}
                        placeholder="Type your message..."
                        className={styles.chatInput}
                    />
                    <button onClick={handleSendMessage} className={styles.sendButton}>
                        Send
                    </button>
                </div>
            </div>

           
            </>
    );
};

//<EmojiWhileHovering />
export default ChatMain;

*/


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
import EmojiWhileHovering from "../EmojiWhileHovering";
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
        console.log("Attempting Connection...");
        socket.onopen = () => {
            console.log("Successfully Connected");
            socket.send(JSON.stringify({ connectedUser: authData.username }))
        };
        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
            socket.send("Client Closed!");
        };

        socket.onmessage = (event) => {
           // const messageDiv = document.createElement('div');
         //   messageDiv.textContent = `Received: ${event.data}`;
          //  document.getElementById('messages').appendChild(messageDiv);
            console.log('Received message:', event.data);
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
        axios.get(`http://localhost:5000/${`chat`}/token-start?user=${authData.username}`)
            .then(response => {
                console.log('Ответ от сервера TOKEN START:', response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при запросе:', error);
            });
    }, [authData.username]);
    const handleSendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {

            console.log("SENDDDD")
            ws.send(JSON.stringify({ name: authData.username, message: message, to: isSelected.user }));
            //   ws.send(JSON.stringify({ name: "authData.username", message:" message", to: "isSelected.user" }));
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
                <div className={styles.chatInputContainer}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => handleSetMessage(e.target.value)}
                        placeholder="Type your message..."
                        className={styles.chatInput}
                    />
                    <button onClick={handleSendMessage} className={styles.sendButton}>
                        Send
                    </button>
                </div>
            </div>


        </>
    );
};

//<EmojiWhileHovering />
export default ChatMain;