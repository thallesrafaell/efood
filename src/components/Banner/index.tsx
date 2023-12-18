import { RestauranteModel } from '../../Pages/Home'
import { BannerBg, ContainerBanner } from './styles'

type Props = {
  restaurante: RestauranteModel
}

const Banner = ({ restaurante }: Props) => {
  return (
    <BannerBg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <ContainerBanner>
        <p>{restaurante.tipo}</p>
        <h2>{restaurante.titulo}</h2>
      </ContainerBanner>
    </BannerBg>
  )
}
export default Banner
