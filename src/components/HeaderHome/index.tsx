import { HeaderBg, Lema } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'
import { Link } from 'react-router-dom'
import { Container } from '../../styles'

const Header = () => (
  <HeaderBg style={{ backgroundImage: `url(${fundo})` }}>
    <Container>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <Lema>Viva experiências gastronômicas no conforto da sua casa</Lema>
    </Container>
  </HeaderBg>
)

export default Header
