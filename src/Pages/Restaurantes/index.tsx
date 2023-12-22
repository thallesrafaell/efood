import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import Cardapio from '../../constainers/Cardapio'
import { useGetFeturedRestaurantQuery } from '../../service/api'
import { MenuItem } from '../Home'
import { useEffect, useState } from 'react'

const Restaurantes = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetFeturedRestaurantQuery(id!)
  const [item, setItem] = useState<MenuItem[]>()

  useEffect(() => {
    const pratos = restaurante?.cardapio
    setItem(pratos)
  }, [id])

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
