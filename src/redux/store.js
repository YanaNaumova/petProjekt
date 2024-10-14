import { configureStore } from "@reduxjs/toolkit";
import categories from "../redux/slices/categoriesSlice";
import category from "../redux/slices/categorySlice";
import products from "../redux/slices/productsSlice";
import product from "../redux/slices/productSlice";

const store = configureStore({
  reducer: {
    categories,
    category,
    products,
    product,
  },
});

export default store;
