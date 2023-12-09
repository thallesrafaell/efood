import {
  Avalicao,
  BotaoSaibaMais,
  CabecalhoCard,
  Card,
  DescricaoRestaurante,
  Infos,
  InfosRestaurante,
  Tag,
  Titulo
} from './styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  id?: number
  image: string
  nome: string
  avaliacao: number
  descricao: string
  info: string
}

const Restaurante = ({ image, nome, avaliacao, descricao, info }: Props) => (
  <Card>
    <img src={image} alt={nome} />
    <Infos>
      <Tag>{info}</Tag>
      <Tag>{info}</Tag>
    </Infos>
    <InfosRestaurante>
      <CabecalhoCard>
        <Titulo>{nome}</Titulo>
        <Avalicao>
          {avaliacao} <img src={estrela} alt="estrela" />
        </Avalicao>
      </CabecalhoCard>
      <DescricaoRestaurante>{descricao}</DescricaoRestaurante>
      <BotaoSaibaMais href="#">Saiba mais</BotaoSaibaMais>
    </InfosRestaurante>
  </Card>
)

export default Restaurante
