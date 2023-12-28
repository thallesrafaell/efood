import styled from 'styled-components'
import { Cores, breakPoints } from '../../styles'
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
  display: block;

  &.is-closed {
    display: none;
  }

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
      font-size: 12px;
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
export const Container = styled.div`
  height: 100%;
  max-width: 360px;
  width: 100%;
  background-color: ${Cores.rosa};
  padding: 32px 8px 0px;
  color: ${Cores.creme};

  .empty {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`

export const Delivery = styled.div`
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  display: block;
`

export const InputGroup = styled.div`
  input {
    display: block;
    width: 100%;
    height: 32px;
    background-color: ${Cores.creme};
    padding: 8px;
    color: black;
    font-size: 14px;
    border: 1px solid ${Cores.creme};
    margin-top: 8px;
    font-weight: bold;

    &.error {
      border: 1px solid red;
    }
  }

  label {
    font-size: 14px;
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .margin-top {
    margin-top: 8px;
  }

  .display-flex {
    display: flex;
    column-gap: 34px;

    ${InputGroup} {
      width: 155px;
    }
  }
`
export const ButtonsGroup = styled.div`
  margin-top: 24px;

  button {
    display: block;
    width: 100%;
    padding: 4px 0;
    border: none;
    cursor: pointer;
    background-color: ${Cores.creme};
    color: ${Cores.rosa};
    font-size: 14px;
    font-weight: bold;
  }
`

export const Payment = styled.div`
  display: none;

  &.is-visible {
    display: block;
  }
`

export const DeliveryDetails = styled.section`
  display: none;

  &.is-visible {
    display: block;
  }
`

export const OrderConfimation = styled.section`
  display: none;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0 24px;
  }

  button {
    width: 100%;
    padding: 4px;
    color: ${Cores.rosa};
    background-color: ${Cores.creme};
    border: none;
    font-weight: bold;
    font-size: 14px;
  }

  &.is-visible {
    display: block;
  }
`
