import { BotaoAdd, Card, Descricao } from './styles'

type Props = {
  image: string
  titulo: string
  descricao: string
}

const Prato = ({ image, descricao, titulo }: Props) => {
  const getDescription = (description: string) => {
    return description.slice(0, 141)
  }

  return (
    <>
      <Card>
        <img src={image} alt="pizza" />
        <h3>{titulo}</h3>
        <Descricao>{getDescription(descricao)}</Descricao>
        <BotaoAdd>Adicionar Carrinho</BotaoAdd>
      </Card>
    </>
  )
}

export default Prato
