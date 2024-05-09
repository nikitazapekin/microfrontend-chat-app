import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Router";

import { WebsocketProvider } from "@packages/shared/API/websockets"
const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <WebsocketProvider>
        <RouterProvider router={router} />
    </WebsocketProvider>
)









/*
export const WebsocketContext = createContext(false, null, () => {})
//                                            ready, value, send

// Make sure to put WebsocketProvider higher up in
// the component tree than any consumer.
export const WebsocketProvider = ({ children }) => {
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