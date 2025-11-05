//import React from "react";
import { Button, Typography, Container, Stack, Box} from "@mui/material";
import "../css/App.css"


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
        <Button variant="contained">Contained</Button>
      </Box>
    </Container>
  );
}

export default App
