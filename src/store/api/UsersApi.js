import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://dolphin-app-4zl3e.ondigitalocean.app/users";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (searchTerm) => `/search/?search=${searchTerm}`,
      providesTags: (searchTerm) => [
        {
          type: "users",
          id: searchTerm,
        },
      ],
    }),
    banUsers: builder.mutation({
      query: (id) => ({
        url: `/1/${id}/blockUser`,
        method: "PUT",
      }),
      invalidatesTags: () => [{ type: "users" }],
    }),
  }),
});

export const { useGetUsersQuery, useBanUsersMutation } = usersApi;
