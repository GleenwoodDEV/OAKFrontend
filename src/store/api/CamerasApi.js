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
      query: (searchTerm) => `/search/?search=${searchTerm}`,
      providesTags: (searchTerm) => [
        {
          type: "cameras",
          id: searchTerm,
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
      query: (body) => {
        console.log(body);
        const newData = new FormData();
        newData.append("file", body.file);
        newData.append("name", body.name);
        newData.append("rtspfeed1", body.rtspfeed1);
        newData.append("rtspfeed2", body.rtspfeed2);
        newData.append("timeOn", body.timeOn);
        newData.append("timeFinish", body.timeFinish);
        return {
          url: `/`,
          method: "POST",
          body: newData,
          formData: true,
        };
      },
      invalidatesTags: () => [{ type: "cameras" }],
    }),
    changeCameraStatus: builder.mutation({
      query: (id) => ({
        url: `/1/${id}/changeStatus`,
        method: "PUT",
      }),
      invalidatesTags: () => [{ type: "cameras" }],
    }),
  }),
});

export const {
  useGetCamerasQuery,
  useDeleteCamerasMutation,
  useUpdateCamerasMutation,
  useAddCameraMutation,
  useChangeCameraStatusMutation,
} = camerasApi;
