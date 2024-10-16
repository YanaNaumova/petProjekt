import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (categoryId) => {
    const response = await axios.get(
      `http://localhost:3333/categories/${categoryId}`
    );
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: {
      category: {},
      data: [],
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        const category = {
          ...action.payload.category,
          image: `http://localhost:3333${action.payload.category.image}`,
        };
        state.data.data = action.payload.data.map((item) => ({
          ...item,
          image: `http://localhost:3333${item.image}`,
        }));
        state.data.category = category;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
