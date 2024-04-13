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
import {LazyAbout} from "@/pages/about/About.lazy";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;
*/

/*
import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {LazyAbout} from "@/pages/about/About.lazy";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
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
import {LazyAbout} from "@/pages/about/About.lazy";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;