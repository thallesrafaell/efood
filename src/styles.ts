import { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  creme: '#FFEBD9',
  branco: '#FFFFFF',
  preto: '#000000CC',
  cinza: '#4B4B4B'
}

export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif
}

body {
  background-color: ${Cores.branco};
  color: ${Cores.rosa}
}
`
