import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [],
  },
  reducers: {
    filterPrice: (state, action) => {
      const { data, priceFrom, priceTo } = action.payload;
      state.data = data.filter((item) => {
        return item.discont_price
          ? item.discont_price >= priceFrom && item.discont_price <= priceTo
          : item.price >= priceFrom && item.price <= priceTo;
      });
    },

    filterNewest: (state, action) => {
      const data = action.payload;
      state.data = data.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },

    filterCheckbox: (state, action) => {
      const data = action.payload;
      state.data = data.filter((item) => {
        return item.discont_price !== null;
      });
    },
    filterPriceLow: (state, action) => {
      const data = action.payload;
      state.data = data.sort((a, b) => {
        let priceA = a.discont_price ? a.discont_price : a.price;
        let priceB = b.discont_price ? b.discont_price : b.price;
        return priceB - priceA;
      });
    },
    filterPriceHight: (state, action) => {
      const data = action.payload;
      state.data = data.sort((a, b) => {
        let priceA = a.discont_price ? a.discont_price : a.price;
        let priceB = b.discont_price ? b.discont_price : b.price;
        return priceA - priceB;
      });
    },

    sorterFilter: (state, action) => {
      const { data, value } = action.payload;
      switch (value) {
        case "newest":
          state.data = data.sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          });
          return state.data;
        case "price: high-low":
          state.data = data.sort((a, b) => {
            let priceA = a.discont_price ? a.discont_price : a.price;
            let priceB = b.discont_price ? b.discont_price : b.price;
            return priceA - priceB;
          });
          return state.data;
        case "price: low-high":
          state.data = data.sort((a, b) => {
            let priceA = a.discont_price ? a.discont_price : a.price;
            let priceB = b.discont_price ? b.discont_price : b.price;
            return priceB - priceA;
          });
          return state.data;
        default:
          return state.data;
      }
    },
  },
});

export const {
  filterPrice,
  filterNewest,
  filterPriceLow,
  filterPriceHight,
  filterCheckbox,
} = filterSlice.actions;
export default filterSlice.reducer;
