import Header from './components/HeaderHome'
import Restaurantes from './components/Restaurantes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <div>
        <Header />
        <Restaurantes />
      </div>
    </>
  )
}

export default App
