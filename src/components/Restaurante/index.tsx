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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export const getDescription = (description: string, carateres: number) => {
  return description.slice(0, carateres) + '...'
}
const Restaurante = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado === true && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <InfosRestaurante>
        <CabecalhoCard>
          <Titulo>{titulo}</Titulo>
          <Avalicao>
            {avaliacao} <img src={estrela} alt="estrela" />
          </Avalicao>
        </CabecalhoCard>
        <DescricaoRestaurante>
          {getDescription(descricao, 250)}
        </DescricaoRestaurante>
        <BotaoSaibaMais to={`/restaurante/${id}`}>Saiba mais</BotaoSaibaMais>
      </InfosRestaurante>
    </Card>
  )
}

export default Restaurante
