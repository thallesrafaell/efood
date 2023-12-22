import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../Pages/Home'

type CartState = {
  items: MenuItem[]
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
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = CartSlice.actions
export default CartSlice.reducer
