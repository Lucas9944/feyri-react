import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER MODULES – SWIPER 12 SINTAKSIS
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  slides: Array<string | React.ReactNode>;
  autoplay?: boolean;
  delay?: number;
  navigation?: boolean;
  pagination?: boolean;
  height?: string;
  className?: string;
};

const FeyriSwiper: React.FC<Props> = ({
  slides,
  autoplay = false,
  delay = 2000,
  navigation = false,
  pagination = false,
  height = "400px",
  className = "",
}) => {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={autoplay ? { delay } : false}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      loop={true}
      style={{ width: "100%", height }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeyriSwiper;
