import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const restaurantApi = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oburapi.azurewebsites.net/api/",
    prepareHeaders: (headers: Headers, api) => {
      const token = localStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },
  }),
  tagTypes: ["RestaurantItems"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: ["RestaurantItems"],
    }),
    getRestaurantsById: builder.query({
      query: (id) => ({
        url: `restaurants/${id}`,
      }),
      providesTags: ["RestaurantItems"],
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantsByIdQuery } =
  restaurantApi;
export default restaurantApi;
