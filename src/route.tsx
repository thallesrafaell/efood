import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurantes from './Pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={Home} />
    <Route path="/restaurante" element={<Restaurantes />} />
  </Routes>
)

export default Rotas
