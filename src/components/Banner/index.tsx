import { BannerBg, Container } from './styles'
import fundo from '../../assets/images/italianabanner.png'

const Banner = () => (
  <BannerBg style={{ backgroundImage: `url(${fundo})` }}>
    <Container>
      <p>Italiana</p>
      <h2>La Dolce Vita Trattoria</h2>
    </Container>
  </BannerBg>
)
export default Banner
