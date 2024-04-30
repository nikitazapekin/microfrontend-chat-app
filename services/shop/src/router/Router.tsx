


import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import Shop from "@/pages/Shop";
import ChatPage from "@/pages/ChatPage";
//import {UserCard} from "@packages/shared/src/components/UserCard";
const routes = [
    {
        path: '/shop/chat',
        element: <Suspense fallback={'Loading...'}><ChatPage /></Suspense>
    },
    /* 
    {
        path: "/shop",
        element: <App />,
        children: [
           {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }, 
            {
                path: '/shop/chat',
                element: <Suspense fallback={'Loading...'}><ChatPage /></Suspense>
            },
          
        ]
    },
    */
]

export const router = createBrowserRouter(routes);

export default routes;