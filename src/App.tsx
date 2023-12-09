import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './route'
function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div>
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
