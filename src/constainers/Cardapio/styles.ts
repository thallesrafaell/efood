import { styled } from 'styled-components'
import { Container, Cores } from '../../styles'

export const ContainerCardapio = styled(Container)`
  padding: 56px 0 120px;
`
export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`
export const ModalContent = styled(Container)`
  position: relative;
  z-index: 1;
  height: 344px;
  padding: 32px;
  background-color: ${Cores.rosa};
  color: ${Cores.branco};

  > img {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ImagePrato = styled.img`
  width: 290px;
  height: 280px;
  margin-right: 32px;
  object-fit: cover;
`
export const Content = styled.div`
  display: flex;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: bolder;
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
`

export const ModalButton = styled.button`
  padding: 4px 7px;
  font-weight: bold;
  max-width: 218px;
  background-color: ${Cores.creme};
  color: ${Cores.rosa};
  white-space: no-wrap;
  font-size: 14px;
  text-decoration: none;
  border: none;
`
