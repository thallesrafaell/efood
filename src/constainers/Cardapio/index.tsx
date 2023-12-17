import Prato from '../../components/Pratos'
import { Cardapio as ClassCardapio } from '../../models'
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
import pizza from '../../assets/images/pizza.png'
import { useState } from 'react'
import close from '../../assets/images/close.png'
import pizza2 from '../../assets/images/pizza2.png'

const cardapio: ClassCardapio[] = [
  {
    id: 1,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 2,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 3,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 4,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 5,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  },
  {
    id: 6,
    image: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita'
  }
]

const Cardapio = () => {
  const [modalAberto, setModalAberto] = useState(false)
  return (
    <>
      <ContainerCardapio>
        <ListaPratos>
          {cardapio.map((prato) => (
            <li key={prato.id} onClick={() => setModalAberto(true)}>
              <Prato
                image={prato.image}
                descricao={prato.descricao}
                titulo={prato.titulo}
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
            <ImagePrato src={pizza2} alt="Prato" />
            <Details>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
            </Details>
          </Content>
        </ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}
export default Cardapio
