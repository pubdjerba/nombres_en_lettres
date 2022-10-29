import * as React from "react"
import Layout from "../components/layout"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../styles/theme"

import Banner from "../components/banner"

import Footer from "../components/footer"
import ToConvertForm from "../components/forms/toConvertForm"
import UrlLinks from "../components/links"

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <ToConvertForm />
        <UrlLinks />
        <Footer />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
