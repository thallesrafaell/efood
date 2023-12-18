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
  avalicao: number
  descricao: string
  capa: string
}

const Restaurante = ({
  id,
  titulo,
  destacado,
  tipo,
  avalicao,
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
            {avalicao} <img src={estrela} alt="estrela" />
          </Avalicao>
        </CabecalhoCard>
        <DescricaoRestaurante>{descricao}</DescricaoRestaurante>
        <BotaoSaibaMais to={`/restaurante/${id}`}>Saiba mais</BotaoSaibaMais>
      </InfosRestaurante>
    </Card>
  )
}

export default Restaurante
