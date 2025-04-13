import { apiSlice } from "../apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (filters) => ({
        url: "/product",
        params: {
          ...(filters.title && { title: filters.title }),
          ...(filters.searchTerm && { searchTerm: filters.searchTerm }),
          ...(filters.category && { category: filters.category }),
          ...(filters.author && { author: filters.author }),
          ...(filters.inStock !== null && { inStock: filters.inStock }),
          ...(filters.sort && { sort: filters.sort }),
          ...(filters.minPrice && { minPrice: filters.minPrice }),
          ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
          ...(filters.page && { page: filters.page }),
          ...(filters.limit && { limit: filters.limit }),
        },
      }),
      providesTags: ["product"],
    }),
    // createProduct: builder.query({
    //   query: () => ({
    //     url: "/product",
    //     method: "POST",
    //   }),
    //   providesTags: ["product"],
    // }),
    // This addBook is edited by -Asif
    addBookByAdmin: builder.mutation({
      query: (body) => ({
        url: "/product",
        method: "POST",
        body,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    // updateProduct: builder.mutation({
    //   query: ({ id, ...payload }) => ({
    //     url: `/product/${id}`,
    //     method: "POST",
    //     body: payload,
    //   }),
    //   invalidatesTags: ["product"],
    // }),

    // This updateProduct is edited by -Asif
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
  overrideExisting: false,
});

export const {
  
  useGetAllProductsQuery,
  useAddBookByAdminMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
