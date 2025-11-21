  import { Stack, Container, Box, Badge } from "@mui/material";
  import { NavLink } from "react-router-dom";

  export function NavbarBrand(props: any) {
    return (
      <div className="format_brand home_navbar">
        <Container className="wrap_cont_brand">
          <Stack
            flexDirection={"row"}
            className="icon_config"
            justifyContent={"space-between"}
          >
            {/* LOGO */}
            <Box className="logo_brand logo_brand--gold">
              FEYRI BEAUTY
            </Box>

            <Stack
              flexDirection={"row"}
              justifyContent="space-evenly"
              alignItems={"center"}
              className={"icon_links"}
            >
              {/* SEARCH */}
              <Box className={"icons-line"} onClick={props.setPath}>
                <NavLink to={"/"}>
                  <img
                    src="/icons/feyri_icon_search.png"
                    alt="Search"
                    className="nav_icon_img"
                  />
                </NavLink>
              </Box>

              {/* USER / PROFILE */}
              <Box className={"icons-line"} onClick={props.setPath}>
                <NavLink to={"/brand"}>
                  <img
                    src="/icons/feyri_icon_user.png"
                    alt="Account"
                    className="nav_icon_img"
                  />
                </NavLink>
              </Box>

              {/* CART */}
              <Box className={"icons-line"} onClick={props.setPath}>
                <NavLink to={"/orders"}>
                  <Badge badgeContent={3} color="primary" overlap="circular">
                    <img
                      src="/icons/feyri_icon_cart.png"
                      alt="Cart"
                      className="nav_icon_img"
                    />
                  </Badge>
                </NavLink>
              </Box>

            {/* HEART / WISHLIST */}
            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/community"} className="underline">
                <img
                  src="/icons/feyri_icon_heart.png"
                  alt="Wishlist"
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
                  Brand
                </NavLink>
              </Box>
              <Box className={"hover-line"} onClick={props.setPath}>
                <NavLink to={"/orders"} className="underline">
                  Buyurtma
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

          <Stack className="address_routing">
            HOMEPAGE / BRAND / SPECIAL COLLECTION
          </Stack>
        </Stack>
      </Container>

      {/* Night look uchun gold/black promo banner */}
      <Stack
        className="advertising_stack advertising_stack--night"
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box className="advertising_text" sx={{ fontFamily: "monospace" }}>
          Night-Out Collection
        </Box>
        <Box className="advertising_text_2">
          Golden perfume, bold mascara & black-gold lipstick
        </Box>
        <Box className="advertising_text_3">
          Members get exclusive early access.
        </Box>
      </Stack>
    </div>
  );
}
