import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (categoryId) => {
    const response = await axios.get(`${API_URL}/categories/${categoryId}`);
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
          image: `${API_URL}${action.payload.category.image}`,
        };
        state.data.data = action.payload.data.map((item) => ({
          ...item,
          image: `${API_URL}${item.image}`,
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
