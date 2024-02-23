import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "./Slice";

let Store = configureStore({
  reducer: {
    SliceReducer,
  },
});
export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
