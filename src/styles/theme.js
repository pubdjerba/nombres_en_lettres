import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import "@fontsource/roboto"
/* Weights: [100,300,400,500,700,900] */
let theme = createTheme({
  palette: {
    primary: {
      main: "#1187F3",
    },
    secondary: {
      main: "#d1adcc",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
})

theme = responsiveFontSizes(theme)

export default theme
