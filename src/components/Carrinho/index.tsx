import { CartContent, CartDetails, Prices, PratosList, Prato } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../constainers/Cardapio'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
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
              <button onClick={() => dispatch(remove(item.id))}></button>
            </Prato>
          ))}
        </PratosList>
        <Prices>
          <p>Valor total</p>
          <span>{formatPrice(getTotal())}</span>
        </Prices>
        <button>Continuar com a entrega</button>
      </CartDetails>
    </CartContent>
  )
}

export default Cart
