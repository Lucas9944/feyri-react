import React, { useLayoutEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import "../../../css/about.css";
import ScrollToTopFab from "../../../scrollToTopFab";

type FaqItem = { question: string; answer: string };

export function HelpPage() {
  const location = useLocation();
  const [tab, setTab] = React.useState<number>(0);

  const faq: FaqItem[] = [
    {
      question: "To‘lovni qanday amalga oshiraman?",
      answer:
        "To‘lovni karta orqali yoki bank o‘tkazmasi orqali amalga oshirishingiz mumkin. Checkout sahifasida barcha variantlar ko‘rsatiladi.",
    },
    {
      question: "Yetkazib berish qancha vaqt oladi?",
      answer:
        "Odatda buyurtmalar 1–3 ish kuni ichida yuboriladi. Hududingizga qarab yetkazish vaqti farq qilishi mumkin.",
    },
    {
      question: "Mahsulot original ekanligi kafolatlanadimi?",
      answer:
        "Ha. Biz mahsulotlarni rasmiy kanallar orqali olib kelamiz. Har bir mahsulot partiyasi bo‘yicha nazorat qilinadi.",
    },
    {
      question: "Qaytarish / almashtirish mumkinmi?",
      answer:
        "Agar mahsulot ochilmagan bo‘lsa va holati buzilmagan bo‘lsa, belgilangan muddat ichida qaytarish/almashtirish mumkin.",
    },
    {
      question: "Saytdagi ma’lumotlar xavfsizmi?",
      answer:
        "Ha. Foydalanuvchi ma’lumotlari himoyalangan. Biz maxfiylik siyosatiga qat’iy amal qilamiz.",
    },
   
  ];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="help_page">
      <Container maxWidth="lg" className="help_container">
        {/* Tabs */}
        <Box className="help_tabs_shell">
          <Tabs
            value={tab}
            onChange={(_e, v) => setTab(v)}
            className="help_tabs"
            variant="standard"
            TabIndicatorProps={{ style: { display: "none" } }} // NO underline
          >
            <Tab className="help_tab" label="About Feyri Beauty" />
            <Tab className="help_tab" label="Contact Us" />
            <Tab className="help_tab" label="FAQ" />
          </Tabs>
        </Box>

        {/* Content */}
        <Stack className="help_content">
          {/* ABOUT */}
          {tab === 0 && (
            <Stack gap={3}>
              <Box className="help_card help_hero">
                <Box className="help_hero_media">
                  <img
                    src="/latest/fresh2.JPG"
                    alt="Feyri Beauty"
                    className="help_hero_img"
                    loading="lazy"
                  />
                </Box>

                <Box className="help_hero_text">
                  <Typography className="help_kicker">FEYRI BEAUTY</Typography>

                  <Typography className="help_title">
                    Beauty with care.<span className="accent"> Everyday glow.</span>
                  </Typography>

                  <Typography className="help_desc">
                    Yengil, sof formulalar. Kundalik parvarish va makeup siz bilan
                    uyg‘un ishlasin.
                  </Typography>

                  <Box className="help_meta_line" />

                  <Box className="help_meta">
                    <div className="help_meta_name">Feyri Beauty Team</div>
                    <div className="help_meta_role">Make-up &amp; Skincare Curators</div>
                  </Box>

                  <Box className="help_actions">
                    <Button component={Link} to="/brand" variant="contained" className="btn_primary">
                      Shop now
                    </Button>
                    <Button component={Link} to="/community" variant="outlined" className="btn_ghost">
                      Community
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box className="help_card help_picks">
                <Box className="help_section_head">
                  <Typography className="help_section_title">
                    Feyri <span className="accent">Picks</span>
                  </Typography>
                  <Typography className="help_section_desc">
                    Skincare va makeup birga yaxshiroq ishlaydi — yengil glow uchun tanlab oling.
                    Community tavsiyalari va top-rated picklar.
                  </Typography>
                </Box>

                <Box className="help_pills">
                  <Link to="/brand" className="pill">Skincare</Link>
                  <Link to="/brand" className="pill">Makeup</Link>
                  <Link to="/brand" className="pill">Body &amp; Hair</Link>
                  <Link to="/brand" className="pill">Best sellers</Link>
                  <Link to="/brand" className="pill">New arrivals</Link>
                </Box>

                <Box className="help_icons">
                  <Link to="/brand" className="help_icon_card">
                    <img src="/latest/cut2.png" alt="Skincare" />
                  </Link>
          
                  <Link to="/brand" className="help_icon_card">
                    <img src="/latest/cut1.png" alt="Body & Hair" />
                 
                  </Link>
                  <Link to="/brand" className="help_icon_card">
                    <img src="/latest/cut3.png" alt="Best sellers" />
                   
                  </Link>
                  <Link to="/brand" className="help_icon_card">
                    <img src="/latest/cut4.png" alt="New arrivals" />
            
                  </Link>
                </Box>
              </Box>

              <Box className="help_card help_value">
                <Box className="help_value_text">
                  <Typography className="help_value_title">Clean formulas, daily comfort</Typography>
                  <Typography className="help_value_desc">
                    Kundalik ishlatish uchun yumshoq, teriga qulay formulalar. Minimal irritatsiya,
                    maksimal qulaylik.
                  </Typography>
                </Box>

                <Box className="help_value_media">
                  <img src="/latest/fresh1.JPG" alt="Care" loading="lazy" />
                </Box>
              </Box>

              <Box className="help_card help_value help_value--reverse">
                <Box className="help_value_text">
                  <Typography className="help_value_title">Soft glow, real results</Typography>
                  <Typography className="help_value_desc">
                    Tabiiy ko‘rinish, yengil tekstura, qatlam-qatlam og‘ir bo‘lib qolmaydi.
                    Feyri picks bilan tez tanlang.
                  </Typography>

                  <Box className="help_value_action">
                    <Button component={Link} to="/community" variant="outlined" className="btn_ghost">
                      Community ni ko‘rish
                    </Button>
                  </Box>
                </Box>

                <Box className="help_value_media">
                  <img src="/latest/fresh3.JPG" alt="Glow" loading="lazy" />
                </Box>
              </Box>
            </Stack>
          )}

          {/* CONTACT */}
          {tab === 1 && (
            <Box className="help_card help_contact">
              <Box className="contact_grid">
                <Box>
                  <Typography className="contact_title">Contact Us</Typography>
                  <Typography className="contact_subtitle">
                    Savolingiz bo‘lsa, quyidagi formani to‘ldiring.
                  </Typography>

                  <form className="contact_form" onSubmit={(e) => e.preventDefault()}>
                    <input className="field" type="text" name="name" placeholder="Ismingiz" />
                    <input className="field" type="email" name="email" placeholder="Email" />
                    <textarea className="field field--textarea" name="message" placeholder="Xabaringiz" />

                    <Box className="contact_actions">
                      <Button type="submit" variant="contained" className="btn_primary">
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Box>

                <Box className="contact_map">
                  <Typography className="contact_map_title">Our Location</Typography>
                  <iframe
                    className="map_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0213138318804!2d126.9198304757964!3d37.5545616248148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98c3573d2a15%3A0x58af68b89488af4e!2zSCZNIO2ZjeuMgOygkA!5e0!3m2!1sen!2skr!4v1693885254315!5m2!1sen!2skr"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                  />
                </Box>
              </Box>
            </Box>
          )}

          {/* FAQ */}
          {tab === 2 && (
            <Stack gap={0} className="help_faq_stack">
              {faq.map((item, idx) => (
                <Accordion key={idx} className="feyri_acc" disableGutters>
                  <AccordionSummary className="feyri_acc_summary" expandIcon={<ExpandMoreIcon />}>
                    <Typography className="feyri_acc_q">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="feyri_acc_details">
                    <Typography className="feyri_acc_a">{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          )}
        </Stack>

        <ScrollToTopFab />
      </Container>
    </div>
  );
}
