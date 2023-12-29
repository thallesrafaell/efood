import { getDescription } from '../Restaurante'
import * as S from './styles'

type Props = {
  image: string
  titulo: string
  descricao: string
}

const Prato = ({ image, descricao, titulo }: Props) => {
  return (
    <>
      <S.Card>
        <img src={image} alt="pizza" />
        <h3>{titulo}</h3>
        <S.Descricao>{getDescription(descricao, 144)}</S.Descricao>
        <S.BotaoAdd>Adicionar Carrinho</S.BotaoAdd>
      </S.Card>
    </>
  )
}

export default Prato
