import { Link } from 'react-router-dom'

import { ContainerPerfil, Header, LinkHeader } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderPerfil = () => {
  const dispatch = useDispatch()

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
        <p onClick={openCart}>0 produto(s) no carrinho</p>
      </ContainerPerfil>
    </Header>
  )
}

export default HeaderPerfil
