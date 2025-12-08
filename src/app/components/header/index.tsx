import { Stack, Container, Box, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"; // faqat hero search uchun kerak


export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container className="wrap_cont">
        <Stack
          flexDirection={"row"}
          className="icon_config"
          justifyContent={"space-between"}
        >
          {/* PUSHTI GRADIENT LOGO */}
          <Box className="logo_brand logo_brand--home">FEYRI BEAUTY</Box>
          <Box className="logo_tagline">GO'ZALLIK – BU SENING SEHRING</Box>

          <Stack
  flexDirection={"row"}
  justifyContent="space-evenly"
  alignItems={"center"}
  className="icon_links"
>
  <Box className="icon_btn" onClick={props.setPath}>
    <NavLink to={"/"}>
      <img
        src="/icons/rasm4.jpeg"
        alt="Search"
        className="nav_icon_img"
      />
    </NavLink>
  </Box>

  <Box className="icon_btn" onClick={props.setPath}>
    <NavLink to={"/brand"}>
      <img
        src="/icons/rasm2.jpeg"
        alt="User"
        className="nav_icon_img"
      />
    </NavLink>
  </Box>

  <Box className="icon_btn" onClick={props.setPath}>
  <NavLink to={"/orders"}>
    <Badge
      badgeContent={23}
      color="primary"
      overlap="circular"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      className="nav_badge"
    >
      <img
        src="/icons/feyri_icon_cart.png"
        alt="Cart"
        className="nav_icon_img"
      />
    </Badge>
  </NavLink>
</Box>


  <Box className="icon_btn" onClick={props.setPath}>
    <NavLink to={"/community"}>
      <img
        src="/icons/rasm3.jpeg"
        alt="Heart"
        className="nav_icon_img"
      />
    </NavLink>
  </Box>
</Stack>

        </Stack>

        <Stack className="wrap_config">
          <Stack className="navbar_border_first"> </Stack>
          <Stack
            flexDirection={"row"}
            className="navbar_config"
            justifyContent={"space-between"}
          >
            <Stack
              flexDirection={"row"}
              justifyContent="space-evenly"
              alignItems={"center"}
              className={"navbar_links"}
            >
              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/"} className="underline">
                  Home
                </NavLink>
              </Box>

              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/brand"} className="underline">
                  SHOP
                </NavLink>
              </Box>
              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/orders"} className="underline">
                  ORDER
                </NavLink>
              </Box>
              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/community"} className="underline">
                  Community
                </NavLink>
              </Box>
              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/help"} className="underline">
                  Help
                </NavLink>
              </Box>
            </Stack>
          </Stack>
          <Stack className="navbar_border_first"></Stack>
        </Stack>

        <Stack className="head_information">
          <Stack className="wrap_stack_first">
            {/* BEAUTY COPY */}
            <Box className="text_bolder">
  O‘zingga mos    <br /> go‘zallikni top
</Box>

            <Box className="hero_subcopy">
  50+ ehtiyotkorlik bilan tanlangan beauty mahsulotlar.
  Har kuni yangi kayfiyat, bitta joyda.
</Box>



<Box className="split_screen">
  <div>
    <p>50+</p>
    <small>Beauty products</small>
  </div>

  <div className="vertical_border" />

  <div>
    <p>100+</p>
    <small>Happy customers</small>
  </div>
</Box>


            <Stack className="wrap_input">
              <div className="input_box">
                <input
                  type="search"
                  className="search_input"
                  placeholder="Search lipstick, skincare, perfume..."
                  style={{ paddingRight: "40px" }}
                />
                <button className="search_button">
                  <SearchIcon />
                </button>
              </div>
            </Stack>
          </Stack>

          {/* KOSMETIKA RASMI */}
          <Stack className="wrap_stack_second">
            <Box className="black_variant">
              <img src="/home/feyri_rasm1.png" alt="Feyri Beauty set" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
