import { Link } from 'react-router-dom'

import { ContainerPerfil, Header, LinkHeader } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
      <ContainerPerfil>
        <LinkHeader to="/">
          <span>Restaurantes</span>
        </LinkHeader>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
      </ContainerPerfil>
    </Header>
  )
}

export default HeaderPerfil
