import { styled } from 'styled-components'
import { Container } from '../../styles'

export const ContainerCardapio = styled(Container)`
  padding: 56px 0 120px;
`
export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`
