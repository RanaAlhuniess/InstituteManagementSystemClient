import React from "react";
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/custome-theme";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/main-routes";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Router>
           <MainRoutes />
         </Router>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
