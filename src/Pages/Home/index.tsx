import { useEffect, useState } from 'react'

import Header from '../../components/HeaderHome'
import Restaurantes from '../../constainers/Restaurantes'

export type RestauranteModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliçao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteModel[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  console.log(restaurantes)
  return (
    <>
      <Header />
      <Restaurantes restaurante={restaurantes} />
    </>
  )
}

export default Home
