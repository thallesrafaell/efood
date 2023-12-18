import { useState } from 'react'

import { RestauranteModel } from '../../Pages/Home'
import Prato from '../../components/Pratos'
import {
  ContainerCardapio,
  Content,
  Details,
  ImagePrato,
  ListaPratos,
  Modal,
  ModalButton,
  ModalContent
} from './styles'
import close from '../../assets/images/close.png'

type Props = {
  restaurante: RestauranteModel
}

const Cardapio = (restaurantes: Props) => {
  const [pratoFoto, setPratoFoto] = useState('')
  const [pratoNome, setPratoNome] = useState('')
  const [pratoDescricao, setPratoDescricao] = useState('')
  const [pratoPorcao, setPratoPorcao] = useState('')
  const [pratoPreco, setPratoPreco] = useState(0)
  const [modalAberto, setModalAberto] = useState(false)

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  console.log(restaurantes)
  return (
    <>
      <ContainerCardapio>
        <ListaPratos>
          {restaurantes.restaurante.cardapio.map((prato) => (
            <li
              key={prato.id}
              onClick={() => {
                setModalAberto(true)
                setPratoFoto(prato.foto)
                setPratoNome(prato.nome)
                setPratoDescricao(prato.descricao)
                setPratoPorcao(prato.porcao)
                setPratoPreco(prato.preco)
              }}
            >
              <Prato
                image={prato.foto}
                descricao={prato.descricao}
                titulo={prato.nome}
              />
            </li>
          ))}
        </ListaPratos>
      </ContainerCardapio>
      <Modal className={modalAberto ? 'visible' : ''}>
        <ModalContent>
          <img
            src={close}
            alt="icone fechar"
            onClick={() => setModalAberto(false)}
          />
          <Content>
            <ImagePrato src={pratoFoto} alt="Prato" />
            <Details>
              <h3>{pratoNome}</h3>
              <p>
                {pratoDescricao}
                <br />
                <br />
                Serve: de {pratoPorcao}
              </p>
              <ModalButton>
                Adicionar ao carrinho - {formatPrice(pratoPreco)}
              </ModalButton>
            </Details>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}
export default Cardapio
