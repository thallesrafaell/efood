import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import Cardapio from '../../constainers/Cardapio'
import { useEffect, useState } from 'react'
import { RestauranteModel } from '../Home'

const Restaurantes = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteModel>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
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
