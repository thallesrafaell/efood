import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerRestaurantes = styled.div`
  max-width: 1024px;
  width 100%;
  margin: 0 auto;
  padding: 80px 0 120px;
`
export const ListaRestaurantes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;
`
export const CabecalhoCard = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
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

export const BotaoSaibaMais = styled.a`
  padding: 4px 6px;
  background-color: ${Cores.rosa};
  color: ${Cores.creme};
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`
