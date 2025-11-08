import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

export function SwiperEvents() {
  const events_list = [
    {
      id: 1,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },

    {
      id: 2,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },

    {
      id: 3,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },

    {
      id: 4,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },

    {
      id: 5,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },

    {
      id: 6,
      title: "Welcome modern Interior World!",
      desc: "Yangicha uslubda, yangicha Ko'rinish va Ranglar uyg'unligi",
      author: "Brand",
      date: "2024/09/02",
      location: "Deagu",
      img: "/home/sweet_dream.jpeg",
    },
  ];
  return (
    <>
      <Typography
        component="h1"
        style={{
          fontWeight: "bold",
          fontSize: "34px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        EVENTS
      </Typography>
      <Swiper
        style={{
          marginBottom: "100px",
          marginTop: "50px",
          //   border: "2px solid red",
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {events_list.map((value) => (
          <>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              <div className={"events_img"}>
                <img src={value.img} className={"events_img"} alt="Event" />
              </div>
              <Box className={"events_desc"}>
                <Box className={"events_bott"}>
                  <Box className={"bott_left"}>
                    <div className={"event_title_speaker"}>
                      <strong>{value.title}</strong>
                      <div className={"event_organizator"}>
                        <img
                          src={"/icons/speaker.svg"}
                          alt="Speaker Icon"
                          style={{ width: "20px", marginRight: "10px" }}
                        />
                        <p className={"spec_text_author"}>{value.author}</p>
                      </div>
                    </div>

                    <p className={"text_desc"} style={{ marginTop: "10px" }}>
                      {value.desc}
                    </p>

                    <div className={"bott_info"} style={{ marginTop: "10px" }}>
                      <div className={"bott_info_main"}>
                        <img
                          src={"/icons/calendar.svg"}
                          alt="Calendar Icon"
                          style={{ marginRight: "10px" }}
                        />
                        {value.date}
                      </div>
                      <div className={"bott_info_main"}>
                        <img
                          src={"/icons/location.svg"}
                          alt="Location Icon"
                          style={{
                            marginLeft: "30px",
                            marginRight: "10px",
                            marginBottom: "-4px",
                          }}
                        />
                        {value.location}
                      </div>
                    </div>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}