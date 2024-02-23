import { configureStore } from "@reduxjs/toolkit";
import { SagaReducer } from "./Slice";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./RootSaga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
let sagaMiddleware = createSagaMiddleware();

let SagaStore = configureStore({
  reducer: {
    SagaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(RootSaga);
export default SagaStore;
export type RootState = ReturnType<typeof SagaStore.getState>;
export type AppDispatch = typeof SagaStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
