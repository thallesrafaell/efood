import { CartContent, CartDetails, Prices, PratosList, Prato } from './styles'
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContent className={isOpen ? 'is-open' : ''}>
      <div onClick={closeCart} className="overlayCart"></div>
      <CartDetails>
        <PratosList>
          <Prato>
            <img src={pizza} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button></button>
          </Prato>
          <Prato>
            <img src={pizza} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button></button>
          </Prato>
        </PratosList>
        <Prices>
          <p>Valor total</p>
          <span>R$ 182,70</span>
        </Prices>
        <button>Continuar com a entrega</button>
      </CartDetails>
    </CartContent>
  )
}

export default Cart
