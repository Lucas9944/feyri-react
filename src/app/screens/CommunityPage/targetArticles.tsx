import React from "react";
import { Box, Container, Stack, Checkbox } from "@mui/material";
import { CalendarMonth, ThumbUp, Visibility } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export function TargetArticles(props: any) {
  return (
    <Container>
      <Stack className="community-info">
        {props.targetBoArticles?.map((article: any, index: number) => (
          <Stack className="article_box" key={`${article}-${index}`}>
            <Stack className="article_img">
              <img
                src="/latest/fresh1.JPG"
                className="img"
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  marginTop: "0.6px",
                  marginLeft: "0.6px",
                }}
                alt="article"
              />
            </Stack>

            <Stack className="article_info">
              <Stack className="article_user">
                <img src="/icons/default_user.svg" className="img" alt="user" />
                <span className="user">Jacob Robertson</span>
              </Stack>

              <Stack className="title">Baby Must Haves You Need For A Newborn</Stack>

              <Stack className="date_like_view">
                <Box>
                  <Checkbox
                    icon={
                      <CalendarMonth
                        sx={{ color: "#f48fb1", height: 20, ml: "-3px", mb: "3px" }}
                      />
                    }
                    checked={false}
                  />
                  <span>22.10.2023</span>
                </Box>

                <Box>
                  <Checkbox
                    icon={
                      <Visibility
                        sx={{ color: "#f48fb1", height: 21, ml: "45px", mb: "3px" }}
                      />
                    }
                    checkedIcon={<Visibility sx={{ color: "#f48fb1" }} />}
                    checked={false}
                  />
                  <span style={{ marginTop: "-1px" }}>15</span>

                  <Checkbox
                    icon={
                      <ThumbUp
                        sx={{ color: "#f48fb1", height: 18, ml: "10px", mb: "4px" }}
                      />
                    }
                    checkedIcon={<ThumbUp sx={{ color: "#f48fb1" }} />}
                    checked={false}
                  />
                  <span>8</span>
                </Box>
              </Stack>

              <Stack className="some-info">
                Suspendisse fermentum ante eu libero molestie aliquam. Pellentesque ut diam condimentum,
                pellentesque ante imperdiet, ultricies dui. Praesent eu lectus enim.
              </Stack>

              <Stack className="link">
                <Box>
                  <NavLink to="/community" className="readmore">
                    read more ...
                  </NavLink>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
