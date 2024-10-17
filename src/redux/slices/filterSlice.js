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
    resetFilters: (state) => {
      state.data = [];
      state.isChecked = false;
      state.priceFrom = 0;
      state.priceTo = Infinity;
      state.sortBy = "default";
    },
    applyFilters: (state, action) => {
      const { data } = action.payload;
      console.log("Raw Data:", data);

      let filteredData = data.filter((item) => {
        const itemPrice = item.discont_price || item.price;
        return itemPrice >= state.priceFrom && itemPrice <= state.priceTo;
      });

      if (state.isChecked) {
        filteredData = filteredData.filter(
          (item) => item.discont_price !== null
        );
      }

      console.log("Filtered Data:", filteredData);

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

export const {
  setPriceFilter,
  toggleCheckbox,
  setSortBy,
  applyFilters,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
