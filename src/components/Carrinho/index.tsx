import {
  CartContent,
  CartDetails,
  Prices,
  PratosList,
  Prato,
  Form,
  InputGroup,
  Container,
  Delivery,
  ButtonsGroup,
  Payment,
  DeliveryDetails
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../constainers/Cardapio'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [deliveryDetails, setDeliveryDetails] = useState(false)
  const [cartDetails, setCartDetails] = useState(false)
  const [payments, setPayments] = useState(false)

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
      <Container>
        <CartDetails className={cartDetails ? 'is-closed' : ''}>
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
          <button
            type="button"
            onClick={() => {
              setDeliveryDetails(true)
              setCartDetails(true)
            }}
          >
            Continuar com a entrega
          </button>
        </CartDetails>
        <Delivery>
          <Form>
            <DeliveryDetails className={deliveryDetails ? 'is-visible' : ''}>
              <h2>Entrega</h2>
              <InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input id="fullName" type="text" />
              </InputGroup>
              <InputGroup className="margin-top">
                <label htmlFor="address">Endereço</label>
                <input id="address" type="text" />
              </InputGroup>
              <InputGroup className="margin-top">
                <label htmlFor="city">Cidade</label>
                <input id="city" type="text" />
              </InputGroup>
              <div className="display-flex margin-top">
                <InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input id="cep" type="text" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="number">Número</label>
                  <input id="number" type="text" />
                </InputGroup>
              </div>
              <InputGroup className="margin-top">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input id="complement" type="text" />
              </InputGroup>
              <ButtonsGroup>
                <button
                  type="button"
                  className="margin-top"
                  onClick={() => {
                    setDeliveryDetails(false)
                    setCartDetails(true)
                    setPayments(true)
                  }}
                >
                  Continuar com pagamento
                </button>
                <button
                  type="button"
                  className="margin-top"
                  onClick={() => {
                    setDeliveryDetails(false)
                    setCartDetails(false)
                  }}
                >
                  Voltar para o carrinho
                </button>
              </ButtonsGroup>
            </DeliveryDetails>
            <Payment className={payments ? 'is-visible' : ''}>
              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
              <InputGroup>
                <label htmlFor="displayCardName">Nome no cartão</label>
                <input id="displayCardName" type="text" />
              </InputGroup>
              <div className="display-flex margin-top">
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input id="cep" type="text" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input id="cardCode" type="text" />
                </InputGroup>
              </div>
              <div className="display-flex margin-top">
                <InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input id="cep" type="text" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input id="expiresYear" type="text" />
                </InputGroup>
              </div>
              <ButtonsGroup>
                <button>Finalizar pagamento</button>
                <button
                  type="button"
                  className="margin-top"
                  onClick={() => {
                    setDeliveryDetails(true)
                    setCartDetails(true)
                    setPayments(false)
                  }}
                >
                  Voltar para a edição de endereço
                </button>
              </ButtonsGroup>
            </Payment>
          </Form>
        </Delivery>
      </Container>
    </CartContent>
  )
}

export default Cart
