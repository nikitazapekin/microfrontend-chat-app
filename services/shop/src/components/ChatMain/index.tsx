

/*

import { useEffect, useState } from "react";
import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
import PersonalService from "@packages/shared/API/personal"
import {IsUnauthorizedAction} from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"
import { useAppDispatch } from '@/hooks/redux';
import {useContext} from "react"
import { WebsocketContext } from "@packages/shared/API/websockets";
const ChatMain = () => {
const dispatch = useAppDispatch()
 useEffect(()=> {
   if(!localStorage.getItem('token')) {
    dispatch(IsUnauthorizedAction({isUnauthorized: false}))
   }
}, []) 

const [ready, val,  send ] = useContext(WebsocketContext)


useEffect(() => {
  if (ready) {
    send("test message");
  }
}, [ready, send]);
    return ( 
        <>
        <div className={styles.container}>
        <ListOfUsers />
        Ready: {JSON.stringify(ready)}, Value: {val}
        <ChatWithUser />
        <SessionModal />



        </div>
        </>
     );
}
 
export default ChatMain;
*/





/*

import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
import PersonalService from "@packages/shared/API/personal"
import {IsUnauthorizedAction} from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"
import { useAppDispatch } from '@/hooks/redux';




import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "@packages/shared/API/websockets";

const ChatMain = () => {
    const [ready, val, send] = useContext(WebsocketContext);
    const [connectionMessage, setConnectionMessage] = useState("");

    useEffect(() => {
        if (ready) {
            send("test message");
        }
    }, [ready, send]);

    // Handle reception of WebSocket messages
    useEffect(() => {
        if (val) {
            setConnectionMessage(val);
        }
    }, [val]);

    return (
        <>
            <div className={styles.container}>
                <ListOfUsers />
                {connectionMessage && <div>{connectionMessage}</div>}
                <ChatWithUser />
                <SessionModal />
            </div>
        </>
    );
};

export default ChatMain;
*/








import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
import { useAppDispatch } from '@/hooks/redux';

import { useContext, useEffect, useState } from "react";

import { WebsocketContext } from "@packages/shared/API/websockets";
import {IsUnauthorizedAction} from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"

const ChatMain = () => {

 
const dispatch = useAppDispatch()
    const [ready, val, send] = useContext(WebsocketContext);
    const [connectionMessage, setConnectionMessage] = useState("");
    const [messageToSend, setMessageToSend] = useState("");

    const sendMessageToServer = (message: string) => {
        if (ready) {
            send(JSON.stringify({ user: "Nikita", message }));
        }
    };

    const handleSendMessage = () => {
        sendMessageToServer(messageToSend);
        setMessageToSend(""); 
    };

    useEffect(() => {
        if (ready) {
            send("test message");
        }
    }, [ready, send]);

    // Handle reception of WebSocket messages
    useEffect(() => {
        if (val) {
            setConnectionMessage(val);
        }
    }, [val]);
    useEffect(()=> {
      if(!localStorage.getItem('token')) {
       dispatch(IsUnauthorizedAction({isUnauthorized: false}))
      }
   }, []) 
   
    return (
        <>
            <div className={styles.container}>
                <ListOfUsers />
                {connectionMessage && <div>{connectionMessage}</div>}
                <ChatWithUser />
                <SessionModal />
                <input
                    type="text"
                    value={messageToSend}
                    onChange={(e) => setMessageToSend(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send Message</button>
            </div>
        </>
    );
};

export default ChatMain;
