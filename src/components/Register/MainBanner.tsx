import { Grid } from '@mui/material';
import { Image } from '../../common/components/Image/Image';
import Slider, { Settings } from "react-slick";
import dashboard from '../../assets/vectors/dashboard.webp';
import dashboard2 from '../../assets/vectors/dashboard2.png';
import mobile from '../../assets/vectors/mobile.png';


export const MainBanner = () => {

  var settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Grid 
      item sx={{ display: { xs: 'none', md: 'block' } }} 
      md={6}
      style={{ margin: 'auto', textAlign: 'center' }}
    >
      <Slider {...settings}>
        <Image src={dashboard2} alt={'A beautiful banner image'} />
        <Image src={dashboard} alt={'A beautiful banner image'} />
        <Image src={mobile} alt={'A beautiful banner image'} />
      </Slider>
    </Grid>
  )
}