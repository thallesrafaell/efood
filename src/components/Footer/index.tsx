import { Link } from 'react-router-dom'

import logo from '../../assets/images/efood.svg'
import insta from '../../assets/images/instagram.svg'
import face from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import fundo from '../../assets/images/fundo-cabecalho.png'

import { ContainerFooter, FooterEfood, RedesSociais } from './styles'

const Footer = () => (
  <FooterEfood style={{ backgroundImage: `url(${fundo})` }}>
    <ContainerFooter>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <RedesSociais>
        <Link to="https://instagram.com">
          <img src={insta} alt="Instagram" />
        </Link>
        <Link to="https://facebook.com">
          <img src={face} alt="Facebook" />
        </Link>
        <Link to="https://twitter.com">
          <img src={twitter} alt="Twitter" />
        </Link>
      </RedesSociais>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </ContainerFooter>
  </FooterEfood>
)
export default Footer
