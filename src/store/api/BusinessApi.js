import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_BUSINESS_URL;

export const businessApi = createApi({
  reducerPath: "businessApi",
  tagTypes: ["business"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getBusiness: builder.query({
      query: (searchTerm) => `/search/?search=${searchTerm}`,
      providesTags: (searchTerm) => [
        {
          type: "business",
          id: searchTerm,
        },
      ],
    }),
    addBusiness: builder.mutation({
      query: (body) => {
        const newData = new FormData();
        newData.append("file", body.file);
        newData.append("name", body.name);
        newData.append("buisnessType", body.buisnessType);
        newData.append("pinX", body.pinX);
        newData.append("pinY", body.pinY);
        newData.append("workingHours", body.workingHours);
        newData.append("phone", body.phone);
        newData.append("link", body.link);
        newData.append("instagram", body.instagram);
        newData.append("address", body.address);

        return {
          url: `/`,
          method: "POST",
          body: newData,
          formData: true,
        };
      },
      invalidatesTags: () => [{ type: "business" }],
    }),
    updateBusiness: builder.mutation({
      query: (body) => {
        const newData = new FormData();
        if (body.file) {
          newData.append("file", body.file);
        }
        newData.append("name", body.name);
        newData.append("buisnessType", body.buisnessType);
        newData.append("workingHours", body.workingHours);
        newData.append("phone", body.phone);
        newData.append("link", body.link);
        newData.append("instagram", body.instagram);
        newData.append("address", body.address);

        return {
          url: `/${body.id}`,
          method: "PUT",
          body: newData,
          formData: true,
        };
      },
      invalidatesTags: () => [{ type: "business" }],
    }),
    deleteBusiness: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: () => [{ type: "business" }],
    }),
  }),
});

export const {
  useGetBusinessQuery,
  useAddBusinessMutation,
  useUpdateBusinessMutation,
  useDeleteBusinessMutation,
} = businessApi;
