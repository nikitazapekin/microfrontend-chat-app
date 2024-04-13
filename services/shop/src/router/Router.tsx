/*import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            ...shopRoutes,
            ...adminRoutes,
        ]
    },
]); 

*/



/*
import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
//import {Shop} from "@/pages/Shop";
//import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/shop",
        element: <App />,
        
    },
]

export const router = createBrowserRouter(routes);

export default routes;
*/






/*
import {createBrowserRouter} from "react-router-dom";
//import {App} from "@/components/App/App";
import {Suspense} from "react";
 //import { App } from "@/components/App/App";
const App = () => {
    return ( <>
    kdkldklcd
    </>  );
}
 
 
 console.log("APPP" +JSON.stringify(App))
const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element:<App />
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>second page</h1>
                       
                    </div>
                </Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

*/


/*
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
    return (
        <>
            kdkldklcd
        </>
    );
}

console.log("APPP" + App.toString()); // Convert App to string

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element:<App />
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>second page</h1>
                    </div>
                </Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;


*/


import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import Shop from "@/pages/Shop";
//import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            },
          
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;