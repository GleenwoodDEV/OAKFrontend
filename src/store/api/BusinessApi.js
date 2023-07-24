import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://dolphin-app-4zl3e.ondigitalocean.app/buisness";

export const businessApi = createApi({
  reducerPath: "businessApi",
  tagTypes: ["business"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getBusiness: builder.query({
      query: () => `/`,
      providesTags: () => [
        {
          type: "business",
        },
      ],
    }),
  }),
});

export const { useGetBusinessQuery } = businessApi;
