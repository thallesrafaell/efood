import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const CabecalhoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const InfosRestaurante = styled.div`
  border: 1px solid ${Cores.rosa};
  border-top: none;
  padding: 8px;
  margin-top: -4px;
`

export const ImgRestaurante = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const Avalicao = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  gap: 8px;
`
export const DescricaoRestaurante = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const BotaoSaibaMais = styled(Link)`
  padding: 4px 6px;
  background-color: ${Cores.rosa};
  color: ${Cores.creme};
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`

export const Tag = styled.div`
  color: ${Cores.creme};
  background-color: ${Cores.rosa};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 22px;
  right: 16px;
  gap: 8px;
`
