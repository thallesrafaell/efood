import { BannerBg, ContainerBanner } from './styles'
import fundo from '../../assets/images/italianabanner.png'

const Banner = () => (
  <BannerBg style={{ backgroundImage: `url(${fundo})` }}>
    <ContainerBanner>
      <p>Italiana</p>
      <h2>La Dolce Vita Trattoria</h2>
    </ContainerBanner>
  </BannerBg>
)
export default Banner
