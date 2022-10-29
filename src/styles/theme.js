import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1187F3",
    },
    secondary: {
      main: "#d1adcc",
    },
  },
})
export default theme

const base = {
  h1: "2.5rem",
  h2: "1.3rem",
  h3: "1.2rem",
  h4: "1.1rem",
  p: "1rem",
}

const multp = {
  xs: "1",
  sm: "1.125",
  md: "1.266",
  lg: "1.424",
  xl: "1.602",
}

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: `calc(${base.h1} * ${multp.xs} )`,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: `calc(${base.h1} * ${multp.sm} )`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `calc(${base.h1} * ${multp.md} )`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `calc(${base.h1} * ${multp.lg} )`,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: `calc(${base.h1} * ${multp.xl} )`,
  },
}

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: `calc(${base.h2} * ${multp.xs} )`,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: `calc(${base.h2} * ${multp.sm} )`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `calc(${base.h2} * ${multp.md} )`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `calc(${base.h2} * ${multp.lg} )`,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: `calc(${base.h2} * ${multp.xl} )`,
  },
}

theme.typography.h3 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: `calc(${base.h3} * ${multp.xs} )`,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: `calc(${base.h3} * ${multp.sm} )`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `calc(${base.h3} * ${multp.md} )`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `calc(${base.h3} * ${multp.lg} )`,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: `calc(${base.h3} * ${multp.xl} )`,
  },
}

theme.typography.h4 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: `calc(${base.h4} * ${multp.xs} )`,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: `calc(${base.h4} * ${multp.sm} )`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `calc(${base.h4} * ${multp.md} )`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `calc(${base.h4} * ${multp.lg} )`,
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: `calc(${base.h4} * ${multp.xl} )`,
  },
}
