import * as React from "react"
import Layout from "../components/layout"

import Banner from "../components/banner"

import ToConvertForm from "../components/forms/toConvertForm"

const IndexPage = () => (
  <>
    <Layout>
      <Banner />
      <ToConvertForm />
    </Layout>
  </>
)

export default IndexPage
