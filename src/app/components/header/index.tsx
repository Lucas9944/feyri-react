
import { Stack, Container, Box, Button, InputAdornment, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container className="wrap_cont">
        <Stack
          flexDirection={"row"}
          className="icon_config"
          justifyContent={"space-between"}
        >
          <Box className="logo_brand">INSPIRINGSPACES</Box>
          <Stack
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
            className={"icon_links"}
          >
            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/"} >
                <SearchIcon />
              </NavLink>
            </Box>

            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/brand"} className="underline">
                <PersonIcon />
              </NavLink>
            </Box>
            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/orders"}>
              <Badge badgeContent={3} color="primary">
                  {" "}
                  <ShoppingCartIcon />
                </Badge>
              </NavLink>
            </Box>
            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/community"} className="underline">
                <FavoriteIcon />





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
        </Stack>

        <Stack className="head_information">
          <Stack className="wrap_stack_first">
            <Box className="text_bolder">
              Buy your <br /> dream interior
            </Box>
            <Box
              className="split_screen"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                fontFamily: "sans-serif",
              }}
            >
              <div>
                <p>50+</p>
                <small>Furniture</small>
              </div>
              <div className="vertical_border"></div>
              <div>
                <p>100+</p>
                <small>Customers</small>
              </div>
            </Box>
            <Stack className="wrap_input">
              <div className="input_box">
                <input
                  type="search"
                  className="search_input"
                  placeholder="What are you looking for?"
                  style={{ paddingRight: "40px" }} // Add padding for icon to fit in
                />
                <button className="search_button">
                  <SearchIcon />
                </button>
              </div>
            </Stack>
          </Stack>
          <Stack className="wrap_stack_second">
            <Box className="black_variant">
              <img src="/home/image2.png" alt="" />
              <img
                className="absolute_img_1"
                src="/home/Vector_left.svg"
                alt=""
              />
              <img
                className="absolute_img_2"
                src="/home/Vector_right.svg"
                alt=""
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}