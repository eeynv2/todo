import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[100],
    },
  },
});
