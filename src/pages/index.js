import * as React from "react"
import Layout from "../components/layout"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../styles/theme"

import Banner from "../components/banner"

import ToConvertForm from "../components/forms/toConvertForm"

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <ToConvertForm />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
