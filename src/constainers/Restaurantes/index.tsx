import Restaurante from '../../components/Restaurante'
import { RestauranteModel } from '../../Pages/Home'

import * as S from './styles'

type Props = { restaurante: RestauranteModel[] }

const Restaurantes = ({ restaurante }: Props) => {
  console.log(restaurante)
  return (
    <>
      <S.ContainerRestaurantes>
        <S.ListaRestaurantes>
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
        </S.ListaRestaurantes>
      </S.ContainerRestaurantes>
    </>
  )
}

export default Restaurantes
