import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const restaurantApi = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oburapi.azurewebsites.net/api/",
    /*  baseUrl: "https://localhost:7161/api/", */
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
    /* CreateMenuItem: builder.mutation({
      query: (data) => ({
        url: "menuitem",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MenuItems"],
    }),
    updateMenuItem: builder.mutation({
      query: ({ data, id }) => ({
        url: "menuitem/" + id,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["MenuItems"],
    }),
    deleteMenuItem: builder.mutation({
      query: (id) => ({
        url: "menuitem/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["MenuItems"],
    }), */
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantsByIdQuery,
  /* useGetMenuItemByIdQuery,
  useCreateMenuItemMutation,
  useDeleteMenuItemMutation,
  useUpdateMenuItemMutation, */
} = restaurantApi;
export default restaurantApi;
