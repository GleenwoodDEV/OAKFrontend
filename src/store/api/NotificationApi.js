import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_NOTIFICATION_URL;

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  tagTypes: ["notification"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    createNotification: builder.mutation({
      query: (body) => {
        const newData = new FormData();
        newData.append("file", body.file);
        newData.append("text", body.notificationText);
        newData.append("type", body.type);
        newData.append("buisness_name", body.selectedBusiness);
        return {
          url: `/`,
          method: "POST",
          body: newData,
          formData: true,
        };
      },
      invalidatesTags: () => [{ type: "notification" }],
    }),
  }),
});

export const { useCreateNotificationMutation } = notificationApi;
