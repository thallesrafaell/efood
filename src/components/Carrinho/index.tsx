import { CartContent, CartDetails, Prices, PratosList, Prato } from './styles'
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { formatPrice } from '../../constainers/Cardapio'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContent className={isOpen ? 'is-open' : ''}>
      <div onClick={closeCart} className="overlayCart"></div>
      <CartDetails>
        <PratosList>
          {items.map((item) => (
            <Prato key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button></button>
            </Prato>
          ))}
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
