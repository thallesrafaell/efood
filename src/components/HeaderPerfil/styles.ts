import styled from 'styled-components'
import { Container, Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  height: 186px;
  padding: 64px 0 64px;
  font-size: 18px;
  font-weight: bolder;
`
export const ContainerPerfil = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: ${Cores.rosa};
`
