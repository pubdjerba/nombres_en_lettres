import { createTheme, responsiveFontSizes } from "@mui/material/styles"

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
