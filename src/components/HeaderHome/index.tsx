import { HeaderBg, Lema } from './styles'
import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'

const Header = () => (
  <HeaderBg style={{ backgroundImage: `url(${fundo})` }}>
    <img src={logo} alt="EFOOD" />
    <Lema>Viva experiências gastronômicas no conforto da sua casa</Lema>
  </HeaderBg>
)

export default Header
