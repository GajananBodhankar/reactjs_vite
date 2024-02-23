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

export let asyncThunk = createAsyncThunk("asyncThunk", async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data.products;
});

let Slice = createSlice({
  initialState,
  name: "ReduxSlice",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(asyncThunk.pending, (state, action) => {
        state.state = "loading";
      })
      .addCase(asyncThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.state = "success";
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        state.state = "failed";
      });
  },
});

export const SliceReducer = Slice.reducer;
