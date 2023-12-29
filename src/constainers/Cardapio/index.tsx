import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { MenuItem, RestauranteModel } from '../../Pages/Home'
import Prato from '../../components/Pratos'
import { add, open } from '../../store/reducers/cart'

import close from '../../assets/images/close.png'
import * as S from './styles'

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

  const addToCart = (prato: MenuItem) => {
    if (prato) {
      dispatch(add(prato))
      dispatch(open())
      setModalAberto(false)
    }
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
      <S.ContainerCardapio>
        <S.ListaPratos>
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
        </S.ListaPratos>
      </S.ContainerCardapio>
      <S.Modal
        key={restaurante.restaurante.id}
        className={modalAberto ? 'visible' : ''}
      >
        <S.ModalContent>
          <img
            src={close}
            alt="icone fechar"
            onClick={() => setModalAberto(false)}
          />
          <S.Content>
            <S.ImagePrato src={pratoFoto} alt="Prato" />
            <S.Details>
              <h3>{pratoNome}</h3>
              <p>
                {pratoDescricao}

                <span>Serve: de {pratoPorcao}</span>
              </p>
              <S.ModalButton onClick={() => addToCart(prato!)}>
                Adicionar ao carrinho - {formatPrice(pratoPreco)}
              </S.ModalButton>
            </S.Details>
          </S.Content>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </S.Modal>
    </>
  )
}
export default Cardapio
