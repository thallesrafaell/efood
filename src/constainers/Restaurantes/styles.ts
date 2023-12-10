import styled from 'styled-components'
import { Container } from '../../styles'

export const ContainerRestaurantes = styled(Container)`
  padding: 80px 0 120px;
`
export const ListaRestaurantes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
