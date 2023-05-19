import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ToysGallery.css";

import  { FreeMode, Navigation, Thumbs } from "swiper";

// https://i.ibb.co/72vGsC4/pexels-magda-ehlers-1319572.jpg
// https://i.ibb.co/M86rwSz/pexels-pixabay-255514.jpg
// https://i.ibb.co/zX7XMJQ/pexels-pixabay-106144.jpg
// https://i.ibb.co/ScGk39z/pexels-alexas-fotos-2156261.jpg
// https://i.ibb.co/0ZDbJCj/pexels-anthony-139167-1.jpg
// https://i.ibb.co/rytPRH7/img6.jpg
// https://i.ibb.co/tX36FdW/img7.jpg
// https://i.ibb.co/nzpVfY7/img8.jpg
// https://i.ibb.co/Yktnr9p/img9.jpg
// https://i.ibb.co/HFDfchL/img10.jpg

const ToysGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/72vGsC4/pexels-magda-ehlers-1319572.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/M86rwSz/pexels-pixabay-255514.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/zX7XMJQ/pexels-pixabay-106144.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ScGk39z/pexels-alexas-fotos-2156261.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0ZDbJCj/pexels-anthony-139167-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/rytPRH7/img6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/tX36FdW/img7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/nzpVfY7/img8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Yktnr9p/img9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HFDfchL/img10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/72vGsC4/pexels-magda-ehlers-1319572.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/M86rwSz/pexels-pixabay-255514.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/zX7XMJQ/pexels-pixabay-106144.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ScGk39z/pexels-alexas-fotos-2156261.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0ZDbJCj/pexels-anthony-139167-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dfbWKdM/pexels-pixabay-163077.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ToysGallery;
