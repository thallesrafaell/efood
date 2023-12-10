import styled from 'styled-components'
import { Container } from '../../styles'

export const FooterEfood = styled.footer`
  height: 298px;
  padding: 40px 0;
`
export const RedesSociais = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 34px 0 80px;
`
export const ContainerFooter = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 480px;
    font-size: 10px;
    text-align: center;
  }
`
