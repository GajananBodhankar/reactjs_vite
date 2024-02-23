import { fork,all } from "redux-saga/effects";
import WatchSaga from "./ApicallSaga";

function* RootSaga() {
  yield all([fork(WatchSaga)]);
}
export default RootSaga;
