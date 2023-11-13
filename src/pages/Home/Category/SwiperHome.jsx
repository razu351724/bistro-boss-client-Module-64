import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Slide1 from '../../../assets/home/slide1.jpg'
import Slide2 from '../../../assets/home/slide2.jpg'
import Slide3 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide5 from '../../../assets/home/slide5.jpg'

const SwiperHome = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-20"
        >
            <SwiperSlide>
                <img src={Slide1} alt="#" />
                <h3 className='text-3xl uppercase text-white -mt-16 text-center'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide2} alt="#" />
                <h3 className='text-3xl uppercase text-white -mt-16 text-center'>Pizza</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide3} alt="#" />
                <h3 className='text-3xl uppercase text-white -mt-16 text-center'>soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide4} alt="#" />
                <h3 className='text-3xl uppercase text-white -mt-16 text-center'>Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide5} alt="#" />
                <h3 className='text-3xl uppercase text-white -mt-16 text-center'>Salads</h3>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperHome;