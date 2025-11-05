//import React from "react";
import { Button, Typography, Container, Stack, Box} from "@mui/material";
import "../css/App.css"
import { RippleBadge } from "./MaterialTheme/styled";


function App() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
        <Typography variant="h4" color="primary">
          Hello MUI + Redux + TypeScript + Vite 🚀
        </Typography>
        <Button variant="contained" color="primary">
          Bos!
        </Button>
      </Stack>
      <Box>
        <RippleBadge badgeContent={4}>
        <Button variant="contained" color="primary">Contained</Button>
        </RippleBadge>
      </Box>
    </Container>
  );
}

export default App
