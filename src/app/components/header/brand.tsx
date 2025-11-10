/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Stack,
  Container,
  Box,
  Button,
  InputAdornment,
  Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function NavbarBrand(props: any) {
  return (
    <div className="format_brand home_navbar">
      <Container className="wrap_cont_brand">
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
              <NavLink to={"/"}>
                <SearchIcon />
              </NavLink>
            </Box>

            <Box className={"icons-line"} onClick={props.setPath}>
              <NavLink to={"/brand"}>
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

          <Stack className="address_routing">
            {" "}
            HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM
          </Stack>
        </Stack>
<<<<<<< HEAD






















=======
        <Stack
        className="advertising_stack"
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box className="advertising_text" sx={{ fontFamily: "monospace" }}>
          Member Exlusive
        </Box>
        <Box className="advertising_text_2">
          15% off everything + extra $10 off for plus status
        </Box>
        <Box className="advertising_text_3">
          Not a Member? Join now to shop.
        </Box>
      </Stack>
>>>>>>> 40cc647 (feat: Alternative error fix?)
      </Container>
      <Stack
        className="advertising_stack"
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box className="advertising_text" sx={{ fontFamily: "monospace" }}>
          Member Exlusive
        </Box>
        <Box className="advertising_text_2">
          15% off everything + extra $10 off for plus status
        </Box>
        <Box className="advertising_text_3">
          Not a Member? Join now to shop.
        </Box>
      </Stack>
    </div>
  );
}