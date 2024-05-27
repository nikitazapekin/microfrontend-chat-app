 


import ChatWithUser from "../ChatWithUser";
import ListOfUsers from "../ListOfUsers";
import SessionModal from "../SessionModal";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss"
import { useAppDispatch } from '@/hooks/redux';

import { useContext, useEffect, useState } from "react";

import { WebsocketContext } from "@packages/shared/API/websockets";
import { IsUnauthorizedAction } from "@packages/shared/store/action-creators/IsAuthorizedActionCreator"
import PersonalService from "@packages/shared/API/personal"
 import axios from "axios";

import AuthService from "@packages/shared/API/auth";


import { useSelector } from 'react-redux';
import { authSelector } from "@packages/shared/store/selectors/auth.selector";
const ChatMain = () => {

const authData= useSelector(authSelector)
    const dispatch = useAppDispatch()
    const URL_WEB_SOCKET = 'ws://127.0.0.1:5000/ws';
    const request = {
        token: localStorage.getItem("token")
   
    };
    const [ws, setWs] = useState(null);
    const [trades, setTrades] = useState([]);
    useEffect(() => {
      let socket = new WebSocket("ws://127.0.0.1:5000/ws");
          console.log("Attempting Connection...");
  
          socket.onopen = () => {
              console.log("Successfully Connected");
              socket.send("Hi From the Client!")
          };
          
          socket.onclose = event => {
              console.log("Socket Closed Connection: ", event);
              socket.send("Client Closed!")
          };
  
          socket.onerror = error => {
              console.log("Socket Error: ", error);
          };
    }, []);
  


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            dispatch(IsUnauthorizedAction({ isUnauthorized: false }))
        }
    }, [])

    useEffect(() => {
axios.get( `http://localhost:5000/${`chat`}/token-start?user=${authData.username}`)
  .then(response => {

    console.log('Ответ от сервера TOKEN START:', response.data);
  })
  .catch(error => {

    console.error('Произошла ошибка при запросе:', error);
  });
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
};

export default ChatMain;

 