import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './route'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div>
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
