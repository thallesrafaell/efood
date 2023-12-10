import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  creme: '#FFEBD9',
  branco: '#FFFFFF',
  preto: '#00000080',
  cinza: '#4B4B4B'
}

export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${Cores.branco};
  color: ${Cores.rosa}
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
