import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/efood.svg'
import fundo from '../../assets/images/fundo-cabecalho.png'
import * as S from './styles'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.Header style={{ backgroundImage: `url(${fundo})` }}>
      <S.ContainerPerfil>
        <S.LinkHeader to="/">
          <span>Restaurantes</span>
        </S.LinkHeader>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
      </S.ContainerPerfil>
    </S.Header>
  )
}

export default HeaderPerfil
