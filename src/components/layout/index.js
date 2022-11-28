import * as React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import theme from "../../styles/theme"
import Navbar from "../navbar"
import Footer from "../footer"

const Layout = ({ children }) => {
  const { title, siteUrl } = useSiteMetadata()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar siteTitle={title || `Title`} />
        <main>{children}</main>
        <Footer webSiteUrl={siteUrl} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
