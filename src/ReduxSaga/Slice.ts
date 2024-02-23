import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Idata {
  id: number;
  title: string;
  price: number;
  images: Array<string>;
}

interface Imain {
  data: Idata[];
  state: "idle" | "loading" | "success" | "failed";
}
let initialState: Imain = {
  data: [],
  state: "idle",
};

let SagaSlice = createSlice({
  name: "SagaSlice",
  initialState,
  reducers: {
    Loading: (state) => {
      state.state = "idle";
    },
    Successful: (state, action) => {
      state.data = action.payload;
      state.state = "success";
    },
    Failure: (state) => {
      state.state = "failed";
    },
  },
});

export const SagaReducer = SagaSlice.reducer;

export const { Loading, Successful, Failure } = SagaSlice.actions;
