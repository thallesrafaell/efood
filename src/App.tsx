import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './route'
import Footer from './components/Footer'
import Cart from './components/Carrinho'
function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div>
        <Rotas />
        <Footer />
      </div>
      <Cart />
    </BrowserRouter>
  )
}

export default App
