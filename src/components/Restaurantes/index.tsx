import {
  ContainerRestaurantes,
  ListaRestaurantes,
  Card,
  InfosRestaurante,
  Titulo,
  Avalicao,
  CabecalhoCard,
  DescricaoRestaurante,
  BotaoSaibaMais
} from './styles'
import sushi from '../../assets/images/sushi.svg'
import macarrao from '../../assets/images/macarrao.svg'
import estrela from '../../assets/images/estrela.svg'

const Restaurantes = () => (
  <ContainerRestaurantes>
    <ListaRestaurantes>
      <li>
        <Card>
          <img src={sushi} alt="sushi" />
          <InfosRestaurante>
            <CabecalhoCard>
              <Titulo>Nome do Restaurante</Titulo>
              <Avalicao>
                4.9 <img src={estrela} alt="estrela" />
              </Avalicao>
            </CabecalhoCard>
            <DescricaoRestaurante>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              modi sunt sequi iusto odit corrupti voluptatibus eaque. Saepe,
              quod? Deleniti excepturi ratione soluta nobis quia! Vel atque
              reiciendis fugit eum.
            </DescricaoRestaurante>
            <BotaoSaibaMais href="#">Saiba mais</BotaoSaibaMais>
          </InfosRestaurante>
        </Card>
      </li>
      <li>
        <Card>
          <img src={macarrao} alt="sushi" />
          <InfosRestaurante>
            <CabecalhoCard>
              <Titulo>Nome do Restaurante</Titulo>
              <Avalicao>
                4.9 <img src={estrela} alt="estrela" />
              </Avalicao>
            </CabecalhoCard>
            <DescricaoRestaurante>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              modi sunt sequi iusto odit corrupti voluptatibus eaque. Saepe,
              quod? Deleniti excepturi ratione soluta nobis quia! Vel atque
              reiciendis fugit eum.
            </DescricaoRestaurante>
            <BotaoSaibaMais href="#">Saiba mais</BotaoSaibaMais>
          </InfosRestaurante>
        </Card>
      </li>
    </ListaRestaurantes>
  </ContainerRestaurantes>
)

export default Restaurantes
