import styled from 'styled-components'
import { Cores } from '../../styles'
import fechar from '../../assets/images/lixeira.png'

export const CartContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }

  .overlayCart {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
  }
`

export const CartDetails = styled.div`
  height: 100%;
  max-width: 360px;
  width: 100%;
  background-color: ${Cores.rosa};
  padding: 32px 8px 0px;
  color: ${Cores.creme};

  button {
    background-color: ${Cores.creme};
    border: none;
    padding: 4px 0;
    width: 100%;
    cursor: pointer;
    color: ${Cores.rosa};
    font-size: 14px;
    font-weight: bold;
  }
`

export const Prices = styled.aside`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`

export const PratosList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Prato = styled.li`
  position: relative;
  display: flex;
  background-color: ${Cores.creme};
  height: 100px;
  padding: 8px 8px 12px;
  color: ${Cores.rosa};
  gap: 8px;

  div {
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
    }
  }
  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
