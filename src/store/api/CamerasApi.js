import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://dolphin-app-4zl3e.ondigitalocean.app/cameras";

export const camerasApi = createApi({
  reducerPath: "camerasApi",
  tagTypes: ["cameras"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getCameras: builder.query({
      query: () => `/`,
      providesTags: () => [
        {
          type: "cameras",
        },
      ],
    }),
    deleteCameras: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: () => [{ type: "cameras" }],
    }),
    updateCameras: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: () => [{ type: "cameras" }],
    }),
    addCamera: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "cameras" }],
    }),
  }),
});

export const {
  useGetCamerasQuery,
  useDeleteCamerasMutation,
  useUpdateCamerasMutation,
  useAddCameraMutation,
} = camerasApi;
