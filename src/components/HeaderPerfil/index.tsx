import { Container, Header } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <Container>
      <h2>Restaurantes</h2>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <p>0 produto(s) no carrinho</p>
    </Container>
  </Header>
)

export default HeaderPerfil
