import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Failure, Loading, Successful } from "./Slice";

function* fetchData(): Generator<any, void, AxiosResponse<any>> {
  try {
    let response: AxiosResponse<any> = yield call(
      axios.get,
      "https://dummyjson.com/products"
    );
    if (response && response.status === 200) {
      // Dispatch the Successful action with the received data
      yield put(Successful(response.data.products));
    } else {
      // Dispatch the Failure action if the response is not successful
      yield put(Failure());
    }
  } catch (error) {
    // Dispatch the Failure action if there's an error
    yield put(Failure());
  }
}

function* WatchSaga() {
  yield takeLatest(Loading, fetchData);
}
export default WatchSaga;
