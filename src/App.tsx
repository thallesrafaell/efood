import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './route'
import Footer from './components/Footer'
import Cart from './components/Carrinho'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div>
          <Rotas />
          <Footer />
        </div>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
