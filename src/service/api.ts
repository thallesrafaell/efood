import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteModel } from '../Pages/Home'

type PurchaseResponse = {
  orderId: string
}

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeturedRestaurantsQuery,
  useGetFeturedRestaurantQuery,
  usePurchaseMutation
} = api
export default api
