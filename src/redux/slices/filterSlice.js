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

    // filterNewest: (state, action) => {
    //   const data = action.payload;
    //   state.data = data.sort((a, b) => {
    //     return new Date(b.updatedAt) - new Date(a.updatedAt);
    //   });
    // },

    filterCheckbox: (state, action) => {
      const data = action.payload;
      state.data = data.filter((item) => {
        return item.discont_price !== null;
      });
    },
    // filterPriceLow: (state, action) => {
    //   const data = action.payload;
    //   state.data = data.sort((a, b) => {
    //     let priceA = a.discont_price ? a.discont_price : a.price;
    //     let priceB = b.discont_price ? b.discont_price : b.price;
    //     return priceB - priceA;
    //   });
    // },
    // filterPriceHight: (state, action) => {
    //   const data = action.payload;
    //   state.data = data.sort((a, b) => {
    //     let priceA = a.discont_price ? a.discont_price : a.price;
    //     let priceB = b.discont_price ? b.discont_price : b.price;
    //     return priceA - priceB;
    //   });
    // },

    sorterFilter: (state, action) => {
      const { data, value } = action.payload;
      let sortedData = [...data];
      switch (value) {
        case "newest":
          sortedData.sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          });
          break;
        case "price: high-low":
          sortedData.sort((a, b) => {
            let priceA = a.discont_price ? a.discont_price : a.price;
            let priceB = b.discont_price ? b.discont_price : b.price;
            return priceB - priceA;
          });
          break;
        case "price: low-high":
          sortedData.sort((a, b) => {
            let priceA = a.discont_price ? a.discont_price : a.price;
            let priceB = b.discont_price ? b.discont_price : b.price;
            return priceA - priceB;
          });
          break;
        default:
          return;
      }
      state.data = sortedData;
    },
  },
});

export const {
  filterPrice,
  sorterFilter,
  // filterNewest,
  // filterPriceLow,
  // filterPriceHight,
  filterCheckbox,
} = filterSlice.actions;
export default filterSlice.reducer;
