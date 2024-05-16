import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import {
  authApi,
  menuItemApi,
  orderApi,
  paymentApi,
  shoppingCartApi,
  restaurantApi,
} from "../../apis";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";
import { RestaurantItemReducer } from "./restaurantItemSlice";

const store = configureStore({
  reducer: {
    restaurantItemStore: RestaurantItemReducer,
    menuItemStore: menuItemReducer,
    shoppingCartStore: shoppingCartReducer,
    userAuthStore: userAuthReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(authApi.middleware)
      .concat(paymentApi.middleware)
      .concat(orderApi.middleware)
      .concat(shoppingCartApi.middleware)
      .concat(restaurantApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
