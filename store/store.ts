import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
