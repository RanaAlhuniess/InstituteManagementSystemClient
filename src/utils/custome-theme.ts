import { createTheme } from "@mui/material/styles";
import { blue, pink, indigo, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      dark: blue[900],
    },
    secondary: {
      main: pink[500],
      light: deepPurple[400],
    },
    background: {
      default: indigo[50],
    },
  },
});
