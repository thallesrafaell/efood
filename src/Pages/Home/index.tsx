import Header from '../../components/HeaderHome'
import Restaurantes from '../../constainers/Restaurantes'
import { useGetFeturedRestaurantsQuery } from '../../service/api'

export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: restaurantes } = useGetFeturedRestaurantsQuery()
  if (!restaurantes) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Restaurantes restaurante={restaurantes} />
    </>
  )
}

export default Home
