import Prato from '../../components/Pratos'
import { Cardapio as ClassCardapio } from '../../models'
import { ContainerCardapio, ListaPratos } from './styles'
import pizza from '../../assets/images/pizza.png'

const cardapio: ClassCardapio[] = [
  {
    id: 1,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 2,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 3,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 4,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 5,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 6,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  }
]

const Cardapio = () => (
  <ContainerCardapio>
    <ListaPratos>
      {cardapio.map((prato) => (
        <li key={prato.id}>
          <Prato
            image={prato.image}
            descricao={prato.descricao}
            titulo={prato.titulo}
          />
        </li>
      ))}
    </ListaPratos>
  </ContainerCardapio>
)
export default Cardapio
