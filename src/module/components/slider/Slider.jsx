import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/images/banner/banner1.png";
import banner2 from "../../../assets/images/banner/banner2.png";
import banner3 from "../../../assets/images/banner/banner3.png";

import BANNER01 from "../../../assets/images/banner/BANNER01.jpg";
import BANNER02 from "../../../assets/images/banner/BANNER02.jpg";
import BANNER03 from "../../../assets/images/banner/BANNER03.jpg";
import BANNER04 from "../../../assets/images/banner/BANNER04.jpg";

import bongo from "../../../assets/bongo-logo.png";
import chorki from "../../../assets/chorki-logo.png";
import neramoy from "../../../assets/niramoy-logo.png";
import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";
import { Button } from "../common/Button";

export const Slider = () => {
  const slides = [
    {
      image: BANNER01,
      title1: "Exclusive",
      title2: "Internet",
      title3: "Deals",
      description: "Subscribe now to get exclusive high-speed internet plans.",
      buttonText: "Get Started",
      buttonLink: "#",
      logo: bongo,
    },
    {
      image: BANNER02,
      title1: "Enjoy",
      title2: "Free Chorki",
      title3: "Subscription",
      description:
        "Get free Chorki Subscription on specified packages for unlimited OTT ecstasy.",
      buttonText: "See Eligible Packages",
      buttonLink: "#",
      logo: chorki,
    },
    {
      image: BANNER03,
      title1: "Enjoy",
      title2: "Free Health",
      title3: "Support",
      description:
        "Orbit Internet offers free telemedicine on specific packages.",
      buttonText: "Learn More",
      buttonLink: "#",
      logo: neramoy,
    },
    {
      image: BANNER04,
      title1: "Enjoy",
      title2: "Free Health",
      title3: "Support",
      description:
        "Orbit Internet offers free telemedicine on specific packages.",
      buttonText: "Learn More",
      buttonLink: "#",
      logo: neramoy,
    },
  ];

  return (
    <Swiper
      slidesPerView={1.6}
      centeredSlides={true}
      spaceBetween={20}
      loop={true}
      // pagination={{ clickable: true }}
      // navigation={true}
      autoplay={{
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className='mySwiper'
      breakpoints={{
        0: { slidesPerView: 1, centeredSlides: false }, // Mobile view
        768: { slidesPerView: 1.2, centeredSlides: true }, // Tablet
        1024: { slidesPerView: 1.6, centeredSlides: true }, // Desktop
      }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='banner-box'>
            <img src={slide.image} alt='banner' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
