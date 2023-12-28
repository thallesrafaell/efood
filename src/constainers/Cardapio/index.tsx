import { useState } from 'react'

import { MenuItem, RestauranteModel } from '../../Pages/Home'
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
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  restaurante: RestauranteModel
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = (restaurante: Props) => {
  const [pratoFoto, setPratoFoto] = useState('')
  const [pratoNome, setPratoNome] = useState('')
  const [pratoDescricao, setPratoDescricao] = useState('')
  const [pratoPorcao, setPratoPorcao] = useState('')
  const [pratoPreco, setPratoPreco] = useState(0)
  const [modalAberto, setModalAberto] = useState(false)
  const [prato, setPrato] = useState<MenuItem>()

  const dispatch = useDispatch()

  const addToCart = (prato: any) => {
    dispatch(add(prato))
    dispatch(open())
    setModalAberto(false)
  }

  const openModal = (
    modal: boolean,
    foto: string,
    nome: string,
    descricao: string,
    porcao: string,
    preco: number,
    prato: MenuItem
  ) => {
    setModalAberto(modal)
    setPratoFoto(foto)
    setPratoNome(nome)
    setPratoDescricao(descricao)
    setPratoPorcao(porcao)
    setPratoPreco(preco)
    setPrato(prato)
  }

  return (
    <>
      <ContainerCardapio>
        <ListaPratos>
          {restaurante.restaurante.cardapio.map((prato) => (
            <li
              key={prato.id}
              onClick={() =>
                openModal(
                  true,
                  prato.foto,
                  prato.nome,
                  prato.descricao,
                  prato.porcao,
                  prato.preco,
                  prato
                )
              }
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
      <Modal
        key={restaurante.restaurante.id}
        className={modalAberto ? 'visible' : ''}
      >
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

                <span>Serve: de {pratoPorcao}</span>
              </p>
              <ModalButton onClick={() => addToCart(prato)}>
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
