import { ContainerRestaurantes, ListaRestaurantes } from './styles'

import Restaurante from '../../components/Restaurante'
import { ListasRestaurantes } from '../../models'

type Props = { restaurantes: ListasRestaurantes[] }

const Restaurantes = ({ restaurantes }: Props) => (
  <ContainerRestaurantes>
    <ListaRestaurantes>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurante
            image={restaurante.image}
            nome={restaurante.nome}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            info={restaurante.info}
          />
        </li>
      ))}
    </ListaRestaurantes>
  </ContainerRestaurantes>
)

export default Restaurantes
