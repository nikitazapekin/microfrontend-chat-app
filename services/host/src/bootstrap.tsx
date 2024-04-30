/*import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import { persistor, store } from "@packages/shared/store/store"
const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
</Provider>
)
*/




import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import { persistor, store } from "@packages/shared/store/store" 
const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
   
    <RouterProvider router={router} />
 
)






/*

//import React from 'react';
//import React from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { Te } from './components/Te';
import {Provider} from "react-redux";
import AppRoutes from './utils/routes';
import { persistor, store } from './store/store';
import { Route, Routes, Navigate } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react';
import {
 HOME_PAGE_ROUTE,
 SETTINGS_ROUTE
} from "../src/utils/constants"
import Homepage from "../src/pages/Homepage"
import SettingsPage from "../src/pages/Settings";
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
const publicRoutes=[
   {
      path: HOME_PAGE_ROUTE,
      Component: Homepage
   },
   {
      path: SETTINGS_ROUTE,
      Component: SettingsPage
   },
]
const root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
const container = createRoot(root);
container.render(
<ErrorBoundary>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

<BrowserRouter>

<Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component  />} />)
            )}
         <Route path="*" element={<Navigate replace to={HOME_PAGE_ROUTE} />} /> 

         </Routes>
</BrowserRouter> 
            </PersistGate>

    </Provider>
            </ErrorBoundary>
);

*/