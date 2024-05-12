

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




/*
const URL_WEB_SOCKET = 'wss://stream.binance.com:9443/ws';
const request = {
  method: 'SUBSCRIBE',
  params: ['btcusdt@trade'],
  id: 1,
};
const Home = () => {
  const [ws, setWs] = useState(null);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const wsClient = new WebSocket(URL_WEB_SOCKET);
    wsClient.onopen = () => {
      setWs(wsClient);
      wsClient.send(JSON.stringify(request));
    };
    wsClient.onclose = () => console.log('ws closed');
    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (evt) => {
        const trade = JSON.parse(evt.data);
        const newTrades = [...trades];
        addTradeToList(trade, newTrades);
      };
    }
  }, [ws, trades]);

  const addTradeToList = (trade, newTrades) => {
    if (newTrades.length >= 20) {
      newTrades.shift();
      newTrades.push(trade);
      setTrades(newTrades);
    } else {
      newTrades.push(trade);
      setTrades(newTrades);
    }
  };

  */



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
      const wsClient = new WebSocket(URL_WEB_SOCKET);
      wsClient.onopen = () => {
        setWs(wsClient);
        wsClient.send(JSON.stringify(request));
      };
      wsClient.onclose = () => console.log('ws closed');
      return () => {
        wsClient.close();
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



/*
import React, { useEffect, useState } from 'react';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';
const URL_WEB_SOCKET = 'wss://stream.binance.com:9443/ws';
const request = {
  method: 'SUBSCRIBE',
  params: ['btcusdt@trade'],
  id: 1,
};
const Home = () => {
  const [ws, setWs] = useState(null);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const wsClient = new WebSocket(URL_WEB_SOCKET);
    wsClient.onopen = () => {
      setWs(wsClient);
      wsClient.send(JSON.stringify(request));
    };
    wsClient.onclose = () => console.log('ws closed');
    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (evt) => {
        const trade = JSON.parse(evt.data);
        const newTrades = [...trades];
        addTradeToList(trade, newTrades);
      };
    }
  }, [ws, trades]);

  const addTradeToList = (trade, newTrades) => {
    if (newTrades.length >= 20) {
      newTrades.shift();
      newTrades.push(trade);
      setTrades(newTrades);
    } else {
      newTrades.push(trade);
      setTrades(newTrades);
    }
  };

  return (
    <div className="app__home">
      <Table trades={trades} />
      <Chart />
    </div>
  );
};
export default Home;

*/