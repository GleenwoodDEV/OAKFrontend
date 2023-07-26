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
    sendRecoveryCode: builder.mutation({
      query: ({ body }) => {
        return {
          url: `/sendRecoveryCode`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: () => [{ type: "users" }],
    }),
    compareRecoveryCode: builder.mutation({
      query: ({ body }) => {
        return {
          url: `/compareRecoveryCode`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: () => [{ type: "users" }],
    }),
    changePassword: builder.mutation({
      query: ({ body }) => {
        return {
          url: `/1/changePassword`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: () => [{ type: "users" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useBanUsersMutation,
  useSendRecoveryCodeMutation,
  useCompareRecoveryCodeMutation,
  useChangePasswordMutation,
} = usersApi;
