import { CartContent, CartDetails, Prices, PratosList, Prato } from './styles'
import pizza from '../../assets/images/pizza.png'

const Cart = () => {
  return (
    <CartContent>
      <div className="overlayCart"></div>
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
