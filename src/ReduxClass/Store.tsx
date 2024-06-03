import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
interface Imain {
  id: number;
  title: string;
  completed: boolean;
}
interface Idata {
  data: Imain[];
  status: "idle" | "loading" | "failed" | "success";
}
const initialState: Idata = {
  data: [],
  status: "idle",
};

export const reducerFunction = (state = initialState, action: any) => {
  switch (action.type) {
    case "loading": {
      return { data: [], status: "loading" };
    }
    case "failed": {
      return { data: [], status: "failed" };
    }
    case "success": {
      return { data: action.payload, status: "success" };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  reducerApiCall: reducerFunction,
});

export const Store = createStore(reducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
