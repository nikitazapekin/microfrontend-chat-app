/*import { createContext, ReactNode, useRef, useState, useEffect } from "react";

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
 
    let socket = new WebSocket("ws://127.0.0.1:5000/ws");
    
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


 */



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
    const socket = new WebSocket("ws://127.0.0.1:5000/ws");

    socket.onopen = () => {
      console.log("Successfully Connected");
      setIsReady(true);
    };

    socket.onclose = (event) => {
      console.log("Socket Closed Connection: ", event);
      setIsReady(false);
    };

    socket.onerror = (error) => {
      console.log("Socket Error: ", error);
      setIsReady(false);
    };

    socket.onmessage = (event) => {
      setVal(event.data);
    };

    ws.current = socket;

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = (data: any) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data));
    }
  };

  const contextValue: WebSocketContextType = [isReady, val, sendMessage];

  return (
    <WebsocketContext.Provider value={contextValue}>
      {children}
    </WebsocketContext.Provider>
  );
};
