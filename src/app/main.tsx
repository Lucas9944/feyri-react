import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../app/App";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../app/MaterialTheme";
import "../css/index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);