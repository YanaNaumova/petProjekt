import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [],
    isChecked: false,
    priceFrom: 0,
    priceTo: Infinity,
    sortBy: "default",
  },
  reducers: {
    // filterPrice: (state, action) => {
    //   const { data, priceFrom, priceTo } = action.payload;
    //   state.data = data.filter((item) => {
    //     return item.discont_price
    //       ? item.discont_price >= priceFrom && item.discont_price <= priceTo
    //       : item.price >= priceFrom && item.price <= priceTo;
    //   });
    // },
    // filterCheckbox: (state, action) => {
    //   const data = action.payload;
    //   if (state.isChecked) {
    //     state.data = data.filter((item) => item.discont_price !== null);
    //   } else {
    //     state.data = data;
    //   }
    // },
    // sorterFilter: (state, action) => {
    //   const { data, value } = action.payload;
    //   let sortedData = [...data];
    //   switch (value) {
    //     case "newest":
    //       sortedData.sort((a, b) => {
    //         return new Date(b.updatedAt) - new Date(a.updatedAt);
    //       });
    //       break;
    //     case "price: high-low":
    //       sortedData.sort((a, b) => {
    //         let priceA = a.discont_price ? a.discont_price : a.price;
    //         let priceB = b.discont_price ? b.discont_price : b.price;
    //         return priceB - priceA;
    //       });
    //       break;
    //     case "price: low-high":
    //       sortedData.sort((a, b) => {
    //         let priceA = a.discont_price ? a.discont_price : a.price;
    //         let priceB = b.discont_price ? b.discont_price : b.price;
    //         return priceA - priceB;
    //       });
    //       break;
    //     default:
    //       return;
    //   }
    //   state.data = sortedData;
    // },
    setPriceFilter: (state, action) => {
      state.priceFrom = action.payload.priceFrom || 0;
      state.priceTo = action.payload.priceTo || Infinity;
    },
    toggleCheckbox: (state) => {
      state.isChecked = !state.isChecked;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    applyFilters: (state, action) => {
      const { data } = action.payload;

      let filteredData = data.filter((item) => {
        const itemPrice = item.discont_price || item.price;
        return itemPrice >= state.priceFrom && itemPrice <= state.priceTo;
      });

      if (state.isChecked) {
        filteredData = filteredData.filter(
          (item) => item.discont_price !== null
        );
      }

      switch (state.sortBy) {
        case "newest":
          filteredData.sort(
            (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
          );
          break;
        case "price: high-low":
          filteredData.sort((a, b) => {
            const priceA = a.discont_price || a.price;
            const priceB = b.discont_price || b.price;
            return priceB - priceA;
          });
          break;
        case "price: low-high":
          filteredData.sort((a, b) => {
            const priceA = a.discont_price || a.price;
            const priceB = b.discont_price || b.price;
            return priceA - priceB;
          });
          break;
        default:
          break;
      }

      state.data = filteredData;
    },
  },
});

export const { setPriceFilter, toggleCheckbox, setSortBy, applyFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
