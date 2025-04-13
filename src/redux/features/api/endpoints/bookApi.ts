import { IBookResponse } from "../../../../types/bookResponse";
import { apiSlice } from "../apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (body) => ({
        url: "/product",
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getBooks: builder.query<IBookResponse, void>({ query: () => "/product" }),
    getBookById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery, useAddBookMutation, useGetBookByIdQuery } =
  bookApi;
