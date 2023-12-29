import estrela from '../../assets/images/estrela.svg'

import * as S from './styles'

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
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.Infos>
        {destacado === true && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.Infos>
      <S.InfosRestaurante>
        <S.CabecalhoCard>
          <S.Titulo>{titulo}</S.Titulo>
          <S.Avalicao>
            {avaliacao} <img src={estrela} alt="estrela" />
          </S.Avalicao>
        </S.CabecalhoCard>
        <S.DescricaoRestaurante>
          {getDescription(descricao, 250)}
        </S.DescricaoRestaurante>
        <S.BotaoSaibaMais to={`/restaurante/${id}`}>
          Saiba mais
        </S.BotaoSaibaMais>
      </S.InfosRestaurante>
    </S.Card>
  )
}

export default Restaurante
