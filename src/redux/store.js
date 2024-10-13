import { configureStore } from "@reduxjs/toolkit";
import categories from "../redux/slices/categoriesSlice";
import category from "../redux/slices/categorySlice";

const store = configureStore({
  reducer: {
    categories,
    category,
  },
});

export default store;
