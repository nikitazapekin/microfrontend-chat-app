

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
      setIsReady(true);
    };
    socket.onclose = (event) => {
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
