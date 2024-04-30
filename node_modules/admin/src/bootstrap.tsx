/*import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";


const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <RouterProvider router={router} />
)

*/







import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";

import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useDispatch} from "react-redux"; 
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






/*



import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useDispatch} from "react-redux"; 
import { persistor, store } from "@packages/shared/store/store"
 
import { setLoading } from "@packages/shared/store/slices/AppSlice";
const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const SomeComponent = () => {
  const dispatch = useDispatch();  

  
  dispatch(setLoading(true));  
  
  return (
    <div>
     
    </div>
  );
}

container.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <SomeComponent /> 
    </PersistGate>
  </Provider>
)


*/