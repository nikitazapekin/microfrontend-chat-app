import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';
import Page from "@/pages/TestPage";
import PreviewPage from "@/pages/PreviewPage";
export const router = createBrowserRouter([
    {
        path: "/",
    
        children: [
            ...shopRoutes,
           ...adminRoutes,
 
        ]
    },

    {
        path: "/test",
        element: <App />,


    },
    {
        path: "/welcome",
        element:  <PreviewPage />,


    }
]);
