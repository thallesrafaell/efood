import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import Cardapio from '../../constainers/Cardapio'

import { useGetFeturedRestaurantQuery } from '../../service/api'

const Restaurantes = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetFeturedRestaurantQuery(id!)

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <HeaderPerfil />
      <Banner restaurante={restaurante} />
      <Cardapio restaurante={restaurante} />
    </>
  )
}

export default Restaurantes
