import FoodCard from "../../../components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ item }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="grid grid-cols-1 md:grid-c lg:grid-cols-3 gap-4">
                        {
                            item.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;