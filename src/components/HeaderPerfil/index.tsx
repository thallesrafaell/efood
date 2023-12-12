import { ContainerPerfil, Header, LinkHeader } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <ContainerPerfil>
      <LinkHeader to="/">
        <span>Restaurantes</span>
      </LinkHeader>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </ContainerPerfil>
  </Header>
)

export default HeaderPerfil
