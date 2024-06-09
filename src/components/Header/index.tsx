import Banner from "../../assets/banner.png"
import "./Header.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header_banner">
            <img src={Banner} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_banner">
            <img src={Banner} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Header
