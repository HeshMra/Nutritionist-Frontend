import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carasoul() {
  const [swiperRef, setSwiperRef] = useState(null);
    


  return (
    <div className='mx-40 my-20'>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="Images/Card.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="Images/Card-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="Images/Card-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="Images/Card.png" alt="" /></SwiperSlide>
      </Swiper>

      
    </div>
  );
}
