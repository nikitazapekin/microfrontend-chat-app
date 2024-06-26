import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
//import {AppDispatch, RootState} from "../../store/store";

import {AppDispatch, RootState} from "@packages/shared/store/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
/*
*/

