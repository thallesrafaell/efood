import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestauranteModel } from '../../Pages/Home'

type CartState = {
  items: RestauranteModel[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestauranteModel>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = CartSlice.actions
export default CartSlice.reducer
