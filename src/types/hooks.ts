// src/types/hooks.ts
import { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
