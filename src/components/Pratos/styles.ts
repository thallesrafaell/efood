import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.rosa};
  color: ${Cores.creme};
  padding: 8px;
  display: block;

  > img {
    width: 100%;
    height: 168px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  display: block;
`
export const Descricao = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 8px 0;
  display: block;
`
export const BotaoAdd = styled.button`
  background-color: ${Cores.creme};
  color: ${Cores.rosa};
  padding: 4px auto;
  display: flex;
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`
