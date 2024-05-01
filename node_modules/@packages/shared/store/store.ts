import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/AppSlice'
import { getPersistConfig } from 'redux-deep-persist';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { calculatorSlice } from "./slices/CalculatorSlice";
//import AppSlice from "./slices/AppSlice";
import appSlicee from "./slices/AppSlice"
import AuthSlice from "./slices/AuthSlice";
import SidebarSlice from "./slices/SidebarSlice";
const rootReducer = combineReducers({

 appSlicee: appSlicee,
 AuthSlice: AuthSlice,
 SidebarSlice: SidebarSlice

})
const persistConfig = getPersistConfig({
    key: 'root',
    storage,
    blacklist: ['calculator.result', 'calculator.displayValue'],
    rootReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

