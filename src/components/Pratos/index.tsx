import { BotaoAdd, Card, Descricao } from './styles'

type Props = {
  image: string
  titulo: string
  descricao: string
}

const Prato = ({ image, descricao, titulo }: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt="pizza" />
        <h3>{titulo}</h3>
        <Descricao>{descricao}</Descricao>
        <BotaoAdd>Adicionar Carrinho</BotaoAdd>
      </Card>
    </>
  )
}

export default Prato
