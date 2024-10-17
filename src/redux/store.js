import { configureStore } from "@reduxjs/toolkit";
import categories from "../redux/slices/categoriesSlice";
import category from "../redux/slices/categorySlice";
import products from "../redux/slices/productsSlice";
import product from "../redux/slices/productSlice";
import filter from "../redux/slices/filterSlice";
import cart from "../redux/slices/cartSlice";

const store = configureStore({
  reducer: {
    categories,
    category,
    products,
    product,
    filter,
    cart,
  },
});

export default store;
