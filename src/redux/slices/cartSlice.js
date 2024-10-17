import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    addedProductIds: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { product, count } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        existingProduct.count += count;
      } else {
        state.cart.push({ product, count });
        state.addedProductIds.push(product.id);
      }
    },
    removeProductFromCart: (state, action) => {
      const productID = action.payload;
      state.cart = state.cart.filter((item) => item.product.id !== productID);
    },

    increaseProductCount: (state, action) => {
      const productID = action.payload;
      const productInCart = state.cart.find(
        (item) => item.product.id === productID
      );

      if (productInCart) {
        productInCart.count += 1;
      }
    },

    decreaseProductCount: (state, action) => {
      const productID = action.payload;
      const productInCart = state.cart.find(
        (item) => item.product.id === productID
      );

      if (productInCart) {
        if (productInCart.count > 1) {
          productInCart.count -= 1;
        } else {
          state.cart = state.cart.filter(
            (item) => item.product.id !== productID
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.addedProductIds = [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseProductCount,
  decreaseProductCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
