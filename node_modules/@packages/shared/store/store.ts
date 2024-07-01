

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/AppSlice'
import { getPersistConfig } from 'redux-deep-persist';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { calculatorSlice } from "./slices/CalculatorSlice";
import appSlicee from "./slices/AppSlice"
import AuthSlice from "./slices/AuthSlice";
import SidebarSlice from "./slices/SidebarSlice";
import IsUnauthorized from "./slices/IsUnauthorized";
import PersonalInformationSlice from "./slices/PersonalInformationSlice";
import SearchUser from "./slices/SearchUser";
import SelectedChat from "./slices/SelectedChat";
import MessagesSlice from "./slices/Messages"
const rootReducer = combineReducers({
  appSlicee: appSlicee,
  AuthSlice: AuthSlice,
  SidebarSlice: SidebarSlice,
  IsUnauthorized: IsUnauthorized, 
  PersonalInformationSlice: PersonalInformationSlice,
  SearchUser: SearchUser,
  SelectedChat: SelectedChat,
  MessagesSlice: MessagesSlice
});
const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  blacklist: [
    'calculator.result',
    'calculator.displayValue',
    'SelectedChat',
    'MessagesSlice'
  ],
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
