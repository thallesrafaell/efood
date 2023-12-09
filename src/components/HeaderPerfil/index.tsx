import { Container, Header } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'

const HeaderPerfil = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <Container>
      <h2>Restaurantes</h2>
      <img src={logo} alt="EFOOD" />
      <p>0 produto(s) no carrinho</p>
    </Container>
  </Header>
)

export default HeaderPerfil
