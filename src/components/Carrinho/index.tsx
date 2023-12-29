import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../service/api'

import { formatPrice } from '../../constainers/Cardapio'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [deliveryDetails, setDeliveryDetails] = useState(false)
  const [cartDetails, setCartDetails] = useState(false)
  const [payments, setPayments] = useState(false)
  const [order, setOrder] = useState(false)

  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      displayCardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(2, 'erro').required('Obrigatorio'),
      address: Yup.string().min(2, 'erro').required('Obrigatorio'),
      city: Yup.string().min(2, 'erro').required('Obrigatorio'),
      cep: Yup.string().min(2, 'erro').required('Obrigatorio'),
      number: Yup.string().min(2, 'erro').required('Obrigatorio'),
      complement: Yup.string().min(2, 'erro'),
      displayCardName: Yup.string().min(2, 'erro').required('Obrigatorio'),
      cardNumber: Yup.string().min(2, 'erro').required('Obrigatorio'),
      cardCode: Yup.string().min(2, 'erro').required('Obrigatorio'),
      expiresMonth: Yup.string().min(2, 'erro').required('Obrigatorio'),
      expiresYear: Yup.string().min(2, 'erro').required('Obrigatorio')
    }),

    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.displayCardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: getTotal()
          }
        ]
      })
    }
  })

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.touched.fullName &&
      !form.touched.city &&
      !form.touched.cep &&
      !form.touched.number
    ) {
      setDeliveryDetails(false)
      setCartDetails(true)
      setPayments(true)
    }
  }

  const goToCheckout = () => {
    if (
      !form.errors.displayCardName &&
      !form.errors.cardNumber &&
      !form.errors.cardCode &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear &&
      form.touched.cardNumber &&
      form.touched.cardCode &&
      form.touched.expiresMonth &&
      form.touched.expiresYear &&
      form.touched.displayCardName
    ) {
      setPayments(false)
      setOrder(true)
    }
  }

  const clearCart = () => {
    dispatch(clear())
    dispatch(close())
    setOrder(false)
    setCartDetails(false)
  }

  return (
    <S.CartContent className={isOpen ? 'is-open' : ''}>
      <div onClick={closeCart} className="overlayCart"></div>
      <S.Container>
        {items.length === 0 ? (
          <p className="empty">Carrinho Vazio</p>
        ) : (
          <>
            <S.CartDetails className={cartDetails ? 'is-closed' : ''}>
              <S.PratosList>
                {items.map((item) => (
                  <S.Prato key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formatPrice(item.preco)}</span>
                    </div>
                    <button onClick={() => dispatch(remove(item.id))}></button>
                  </S.Prato>
                ))}
              </S.PratosList>
              <S.Prices>
                <p>Valor total</p>
                <span>{formatPrice(getTotal())}</span>
              </S.Prices>
              <button
                type="button"
                onClick={() => {
                  setDeliveryDetails(true)
                  setCartDetails(true)
                }}
              >
                Continuar com a entrega
              </button>
            </S.CartDetails>
            <S.Delivery>
              <S.Form onSubmit={form.handleSubmit}>
                <S.DeliveryDetails
                  className={deliveryDetails ? 'is-visible' : ''}
                >
                  <h2>Entrega</h2>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup className="margin-top">
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup className="margin-top">
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div className="display-flex margin-top">
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        mask="99999-999"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        className={checkInputHasError('cep') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </div>
                  <S.InputGroup className="margin-top">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.ButtonsGroup>
                    <button
                      type="button"
                      className="margin-top"
                      onClick={goToPayment}
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
                  </S.ButtonsGroup>
                </S.DeliveryDetails>
                <S.Payment className={payments ? 'is-visible' : ''}>
                  <h2>
                    Pagamento - Valor a pagar{' '}
                    <span>{formatPrice(getTotal())}</span>
                  </h2>
                  <S.InputGroup>
                    <label htmlFor="displayCardName">Nome no cartão</label>
                    <input
                      id="displayCardName"
                      type="text"
                      name="displayCardName"
                      value={form.values.displayCardName}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('displayCardName') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <div className="display-flex margin-top">
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        mask="9999 9999 9999 9999"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        mask="999"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </div>
                  <div className="display-flex margin-top">
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        mask="99"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        mask="99"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </div>
                  <S.ButtonsGroup>
                    <button type="submit" onClick={goToCheckout}>
                      Finalizar pagamento
                    </button>
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
                  </S.ButtonsGroup>
                </S.Payment>
              </S.Form>
              <S.OrderConfimation className={order ? 'is-visible' : ''}>
                <h2>
                  Pedido realizado - <span>{data?.orderId}</span>
                </h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <button type="button" onClick={clearCart}>
                  Concluir
                </button>
              </S.OrderConfimation>
            </S.Delivery>
          </>
        )}
      </S.Container>
    </S.CartContent>
  )
}

export default Cart
