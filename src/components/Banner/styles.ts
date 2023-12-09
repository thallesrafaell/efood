import styled from 'styled-components'
import { Cores } from '../../styles'

export const BannerBg = styled.div`
  height: 280px;
  position: relative;
  color: ${Cores.branco};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 25px 0 32px;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100vw;
    background-color: ${Cores.preto};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  font-size: 32px;

  p {
    font-weight: 100;
    margin-bottom: 124px;
  }

  h2 {
    font-weight: Bolder;
  }
`
