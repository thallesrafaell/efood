import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cart from '../../components/Carrinho'
import { RestauranteModel } from '../../Pages/Home'

type CartState = {
  items: RestauranteModel[]
}
const initialState: CartState = {
  items: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestauranteModel>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = CartSlice.actions
export default CartSlice.reducer
