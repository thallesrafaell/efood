import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { MenuItem } from '../../Pages/Home'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}

let nextId = 1

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const uniqueId = uuidv4()
      state.items = [...state.items, { ...action.payload, id: nextId++ }]
      console.log(state.items)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = CartSlice.actions
export default CartSlice.reducer
