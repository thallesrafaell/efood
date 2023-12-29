import { Link } from 'react-router-dom'

import fundo from '../../assets/images/fundo-cabecalho.png'
import logo from '../../assets/images/efood.svg'

import { Container } from '../../styles'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderBg style={{ backgroundImage: `url(${fundo})` }}>
      <Container>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <S.Lema>Viva experiências gastronômicas no conforto da sua casa</S.Lema>
      </Container>
    </S.HeaderBg>
  )
}

export default Header
