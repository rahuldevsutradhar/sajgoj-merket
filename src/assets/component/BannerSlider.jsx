import Slider from 'react-slick'
import Image from './Image'

import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import banner2 from '../../assets/bannar2.webp'
import banner1 from '../../assets/banner1.webp'
import banner4 from '../../assets/banner4.webp'
import banner5 from '../../assets/banner5.webp'
import banner6 from '../../assets/banner6.webp'
import banner7 from '../../assets/banner7.webp'
import banner3 from '../../assets/banner3.png'
import "slick-carousel/slick/slick-theme.css"

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,     
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
     
  }

  const banners = [banner1,banner2,banner3,banner4,banner5,banner6,banner7]

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          <Link to="/shop">
            <Image src={banner} className="w-full" />
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default BannerSlider
