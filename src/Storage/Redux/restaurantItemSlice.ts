import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantItem: [],
  search: "",
};

export const restaurantItemSlice = createSlice({
  name: "RestaurantItem",
  initialState: initialState,
  reducers: {
    setRestaurantItem: (state, action) => {
      state.restaurantItem = action.payload;
    },
    setSearchItem: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setRestaurantItem, setSearchItem } = restaurantItemSlice.actions;
export const RestaurantItemReducer = restaurantItemSlice.reducer;
