import { createSlice } from "@reduxjs/toolkit";

const getDiscountSlice = createSlice({
  name: "getDiscount",
  initialState: {
    isDiscountRequestSent: false,
  },
  reducers: {
    getDiscountRequestSent: (state) => {
      state.isDiscountRequestSent = true;
    },
  },
});

export const { getDiscountRequestSent } = getDiscountSlice.actions;
export default getDiscountSlice.reducer;
