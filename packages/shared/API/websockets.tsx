import { createContext, ReactNode, useRef, useState, useEffect } from "react";

type WebSocketContextType = [boolean, string | null, ((data: any) => void) | null];

export const WebsocketContext = createContext<WebSocketContextType>([false, null, null]);


type WebsocketProviderProps = {
  children: ReactNode;
};


export const WebsocketProvider = ({ children }: WebsocketProviderProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [val, setVal] = useState<string | null>(null);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    /*
    
    
       //  let socket = new WebSocket("ws://127.0.0.1:8080/ws");
         let socket = new WebSocket("ws://127.0.0.1:5000/ws");
        // let socket = new WebSocket("ws://localhost:5000/ws");
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
    
    
    
            */
    //const socket = new WebSocket('ws://localhost:5000');

    let socket = new WebSocket("ws://127.0.0.1:5000/ws");
    //   socket.onopen = () => setIsReady(true);
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

    //  socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);


  const ret: WebSocketContextType = [isReady, val, ws.current ? ws.current.send.bind(ws.current) : null];

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
};
//https://ably.com/blog/websockets-react-tutorial






/*
import useWebSocket, { ReadyState } from "react-use-websocket"
import { useEffect, createContext, useState, ReactNode } from "react"

export const WebsocketContext = createContext(false, null, () => {})
//                                            ready, value, send

// Make sure to put WebsocketProvider higher up in
// the component tree than any consumer.
export const WebsocketProvider = ({ children }: ReactNode) => {
  const [isReady, setIsReady] = useState(false)
  const [val, setVal] = useState(null)

  const ws = useRef(null)

  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.events/")

    socket.onopen = () => setIsReady(true)
    socket.onclose = () => setIsReady(false)
    socket.onmessage = (event) => setVal(event.data)

    ws.current = socket

    return () => {
      socket.close()
    }
  }, [])

  const ret = [isReady, val, ws.current?.send.bind(ws.current)]

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  )
}
*/

/*
import WebSocket from 'ws';

const WS_API_URL = 'ws://localhost:5000/chat/ws';  
 

export default class WebSocketService {
    static connect(token: string) {
        const ws = new WebSocket(`ws://localhost:5000/chat?token=${token}`);
        
        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.onmessage = (event) => {
            console.log('Received message:', event.data);
            // Обработка полученных данных
        };

        ws.onclose = () => {
            console.log('WebSocket disconnected');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return ws;
    }
}
*/