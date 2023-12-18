import { ContainerRestaurantes, ListaRestaurantes } from './styles'

import Restaurante from '../../components/Restaurante'

import { RestauranteModel } from '../../Pages/Home'

type Props = { restaurante: RestauranteModel[] }

const Restaurantes = ({ restaurante }: Props) => {
  console.log(restaurante)
  return (
    <>
      <ContainerRestaurantes>
        <ListaRestaurantes>
          {restaurante.map((restaurantes) => (
            <li key={restaurantes.id}>
              <Restaurante
                id={restaurantes.id}
                destacado={restaurantes.destacado}
                capa={restaurantes.capa}
                titulo={restaurantes.titulo}
                avaliacao={restaurantes.avaliacao}
                descricao={restaurantes.descricao}
                tipo={restaurantes.tipo}
              />
            </li>
          ))}
        </ListaRestaurantes>
      </ContainerRestaurantes>
    </>
  )
}

export default Restaurantes
