import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    plusOne: (state) => {
      state.counter += 1;
    },
    minusOne: (state) => {
      if (state.counter >= 1) {
        state.counter -= 1;
      }
    },
  },
});

export const { plusOne, minusOne } = counterSlice.actions;
export default counterSlice.reducer;
