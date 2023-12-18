import { ContainerRestaurantes, ListaRestaurantes } from './styles'

import Restaurante from '../../components/Restaurante'

import { RestauranteModel } from '../../Pages/Home'

type Props = { restaurante: RestauranteModel[] }

const Restaurantes = ({ restaurante }: Props) => (
  <>
    <ContainerRestaurantes>
      <ListaRestaurantes>
        {restaurante.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurante
              id={restaurante.id}
              destacado={restaurante.destacado}
              capa={restaurante.capa}
              titulo={restaurante.titulo}
              avalicao={restaurante.avaliçao}
              descricao={restaurante.descricao}
              tipo={restaurante.tipo}
            />
          </li>
        ))}
      </ListaRestaurantes>
    </ContainerRestaurantes>
  </>
)

export default Restaurantes
