import logo from '../../assets/images/efood.svg'
import insta from '../../assets/images/instagram.svg'
import face from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import fundo from '../../assets/images/fundo-cabecalho.png'
import { Container, FooterEfood, RedesSociais } from './styles'
const Footer = () => (
  <FooterEfood style={{ backgroundImage: `url(${fundo})` }}>
    <Container>
      <img src={logo} alt="" />
      <RedesSociais>
        <img src={insta} alt="Instagram" />
        <img src={face} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </RedesSociais>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Container>
  </FooterEfood>
)
export default Footer
