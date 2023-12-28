import { styled } from 'styled-components'
import { Container, Cores, breakPoints } from '../../styles'

export const ContainerCardapio = styled(Container)`
  padding: 56px 0 120px;
`
export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const ModalContent = styled(Container)`
  position: relative;
  z-index: 1;
  height: 344px;
  padding: 32px;
  background-color: ${Cores.rosa};
  color: ${Cores.branco};

  @media (max-width: ${breakPoints.tablet}) {
    height: 500px;
  }

  > img {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ImagePrato = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 32px;
  object-fit: cover;

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    height: 120px;
    margin-bottom: 15px;
  }
`
export const Content = styled.div`
  display: flex;

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
  }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 22px;
    font-size: 14px;
    width: 656px;
    height: 176px;
    span {
      display: block;
    }
    @media (max-width: ${breakPoints.desktop}) {
      width: 100%;
      span {
        margin: 10px 0;
      }
    }
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
  @media (max-width: ${breakPoints.desktop}) {
    margin-top: 30px;
  }

  @media (max-width: 320px) {
    margin-top: 70px;
    max-width: 100%;
  }
`
