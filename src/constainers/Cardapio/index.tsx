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
import { add } from '../../store/reducers/cart'
import Restaurante from '../../components/Restaurante'

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

  const dispatch = useDispatch()

  const addToCart = (prato: MenuItem) => {
    dispatch(add(prato))
  }

  return (
    <>
      <ContainerCardapio>
        <ListaPratos>
          {restaurante.restaurante.cardapio.map(
            (prato) =>
              (
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
              ) && (
                <Modal key={prato.id} className={modalAberto ? 'visible' : ''}>
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
                  <div
                    className="overlay"
                    onClick={() => setModalAberto(false)}
                  ></div>
                </Modal>
              )
          )}
        </ListaPratos>
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
                <ModalButton>
                  Adicionar ao carrinho - {formatPrice(pratoPreco)}
                </ModalButton>
              </Details>
            </Content>
          </ModalContent>
          <div className="overlay" onClick={() => setModalAberto(false)}></div>
        </Modal>
      </ContainerCardapio>
    </>
  )
}
export default Cardapio
