import Header from '../../components/HeaderHome'
import Restaurantes from '../../constainers/Restaurantes'

import { ListasRestaurantes } from '../../models'
import sushi from '../../assets/images/sushi.svg'
import macarrao from '../../assets/images/macarrao.svg'

export const Lista: ListasRestaurantes[] = [
  {
    id: 1,
    image: sushi,
    nome: 'Hioki Sushi ',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: macarrao,
    nome: 'La Dolce Vita Trattoria',
    avaliacao: 4.9,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Japonesa']
  },
  {
    id: 3,
    image: sushi,
    nome: 'Hioki Sushi ',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Japonesa']
  },
  {
    id: 4,
    image: macarrao,
    nome: 'La Dolce Vita Trattoria',
    avaliacao: 4.9,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Japonesa']
  },
  {
    id: 5,
    image: sushi,
    nome: 'Hioki Sushi ',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Japonesa']
  },
  {
    id: 6,
    image: macarrao,
    nome: 'La Dolce Vita Trattoria',
    avaliacao: 4.9,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Japonesa']
  }
]

const Home = (
  <>
    <Header />
    <Restaurantes restaurantes={Lista} />
  </>
)

export default Home
