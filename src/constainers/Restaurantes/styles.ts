import styled from 'styled-components'
import { Container, breakPoints } from '../../styles'

export const ContainerRestaurantes = styled(Container)`
  padding: 80px 0 120px;
`
export const ListaRestaurantes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 110px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }
`
