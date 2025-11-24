// src/app/screens/HomePage/SwiperEvents.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { Box, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const EVENTS = [
  {
    id: 1,
    title: "Welcome modern Interior World!",
    desc: "Yangicha uslub, yangicha ko'rinish va ranglar uyg'unligida iliq interyer tajribasi.",
    author: "Feyri Studio",
    date: "2024 / 09 / 02",
    location: "Daegu",
    img: "/home/123.jpg",
  },
  {
    id: 2,
    title: "Slow Evening Styling Class",
    desc: "Yorug'lik, tekstura va aksessuarlar bilan sokin kechki muhit yaratishni o'rganing.",
    author: "Feyri Design Team",
    date: "2024 / 10 / 18",
    location: "Seoul",
    img: "/home/3018940.jpg",
  },
  {
    id: 3,
    title: "Color & Mood Workshop",
    desc: "Pastel palitra, yumshoq shakllar va minimal detallarda professional maslahatlar.",
    author: "Guest Designer",
    date: "2024 / 11 / 03",
    location: "Busan",
    img: "/home/top-view-leaf-body-care-products.jpg",
  },
  {
    id: 4,
    title: "New Collection Launch Night",
    desc: "Yangi kolleksiya taqdimoti, tirik musiqa va sevimli ichimliklar bilan atmosfera.",
    author: "Feyri Brand",
    date: "2024 / 12 / 12",
    location: "Daegu",
    img: "/home/macadamia-body-lotion-skin-cream.jpg",
  },
];

export function SwiperEvents() {
  return (
    <section className="events_section">
      {/* Header */}
      <Typography
        className="events_title"
        component="h2"
      >
        EVENTS
      </Typography>

      <Typography className="events_subtitle">
        Join our live sessions, launch nights and designer talks in the Feyri world.
      </Typography>

      {/* Swiper */}
      <Swiper
        className="events_swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {EVENTS.map((event) => (
          <SwiperSlide key={event.id} className="events_slide">
            {/* Background image */}
            <div className="events_img">
              <img src={event.img} alt={event.title} />
            </div>

            {/* White info card */}
            <Box className="events_desc">
              {/* Title */}
              <Typography className="events_card_title">
                {event.title}
              </Typography>

              {/* Short description (auto-clamped) */}
              <Typography className="events_text">
                {event.desc}
              </Typography>

              {/* Meta row */}
              <Box className="events_meta_row">
                <Box className="events_meta_item">
                  <PersonOutlineIcon className="events_meta_icon" />
                  <Typography className="events_meta_text">
                    {event.author}
                  </Typography>
                </Box>
                <Box className="events_meta_item">
                  <EventIcon className="events_meta_icon" />
                  <Typography className="events_meta_text">
                    {event.date}
                  </Typography>
                </Box>
                <Box className="events_meta_item">
                  <PlaceIcon className="events_meta_icon" />
                  <Typography className="events_meta_text">
                    {event.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
