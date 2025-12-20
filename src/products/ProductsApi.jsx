import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products?limit=30',
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const {useGetProductsQuery, useGetProductByIdQuery,} = ProductsApi
