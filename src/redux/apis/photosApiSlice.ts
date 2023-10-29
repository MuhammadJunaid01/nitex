import { Photo } from "../../lib/types";
import { apiSlice } from "./apiSlice";

export const photsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], { page: number; limit: number }>({
      query: ({ page = 1, limit = 50 }) =>
        `photos?_page=${page}&_limit=${limit}`,
      providesTags: ["photos"],
    }),
  }),
});
export const { useGetPhotosQuery, useLazyGetPhotosQuery } = photsSlice;
