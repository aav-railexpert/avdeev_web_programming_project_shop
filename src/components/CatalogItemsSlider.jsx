import './CatalogItemsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CatalogItem from "./CatalogItem";

const CatalogItemsSlider = () => {
    return (
        <Swiper className="catalog-items" slidesPerView="3" spaceBetween={15}>
            <SwiperSlide>
                <CatalogItem />
            </SwiperSlide>
            <SwiperSlide>
                <CatalogItem />
            </SwiperSlide>
            <SwiperSlide>
                <CatalogItem />
            </SwiperSlide>
            <SwiperSlide>
                <CatalogItem />
            </SwiperSlide>
        </Swiper>
    )
}

export default CatalogItemsSlider;