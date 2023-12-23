import styled from 'styled-components'
import { Container, Cores, breakPoints } from '../../styles'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  height: 186px;
  padding: 50px 0 50px;
  font-size: 18px;
  font-weight: bolder;
`
export const ContainerPerfil = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    row-gap: 10px;
  }

  p {
    cursor: pointer;

    @media (max-width: ${breakPoints.tablet}) {
      display: block;
    }
  }
`
export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: ${Cores.rosa};
`
