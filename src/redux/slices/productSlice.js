import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data.map((product) => ({
      ...product,
      image: `${API_URL}${product.image}`,
    }));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
