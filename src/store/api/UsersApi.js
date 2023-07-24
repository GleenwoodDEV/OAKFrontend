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
      query: () => `/search/?q=`,
      providesTags: () => [
        {
          type: "users",
        },
      ],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
