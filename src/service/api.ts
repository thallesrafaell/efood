import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteModel } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeturedRestaurants: builder.query<RestauranteModel[], void>({
      query: () => 'restaurantes'
    }),
    getFeturedRestaurant: builder.query<RestauranteModel, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeturedRestaurantsQuery, useGetFeturedRestaurantQuery } =
  api
export default api
