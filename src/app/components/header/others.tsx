import {
  Stack,
  Container,
  Box,
  Badge
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function NavbarOthers(props: any) {
  return (
    <div className="format_brand home_navbar">
      <Container className="wrap_cont_brand">
        <Stack
          flexDirection={"row"}
          className="icon_config"
          justifyContent={"space-between"}
        >
          <Box className="logo_brand">FEYRI BEAUTY</Box>
          <Stack
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
            className={"icon_links"}
          >
            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/"}>
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
              <NavLink to={"/community"} >
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
                  SHOP
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
            {" "}
            HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM/duvet cover sets
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}