import { Route, Routes } from 'react-router-dom'
import HomeEfood from './Pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={HomeEfood} />
  </Routes>
)

export default Rotas
