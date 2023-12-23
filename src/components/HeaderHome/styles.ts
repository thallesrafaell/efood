import styled from 'styled-components'
import { Container, Cores, breakPoints } from '../../styles'

export const HeaderBg = styled.div`
  width: 100%;
  height: 384px;

  @media (max-width: ${breakPoints.tablet}) {
    height: 300px;
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0 40px;
  }
`

export const Lema = styled.p`
  max-width: 539px;
  height: 84px;
  color: ${Cores.rosa};
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  font-weight: Bolder;
  margin-top: 140px;

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 300px;
    font-size: 24px;
    line-height: 30px;
    margin-top: 40px;
  }
`
