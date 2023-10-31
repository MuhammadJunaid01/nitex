import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";

const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_APP_MAIN_API_URL}`,
});

export const apiSlice = createApi({
  tagTypes: ["photos"],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
