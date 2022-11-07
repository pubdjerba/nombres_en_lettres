import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import ToConvertForm from "../components/forms/toConvertForm"
import PageBody from "../components/body"
const IndexPage = () => (
  <>
    <Layout>
      <Banner />
      <ToConvertForm />
      <PageBody />
    </Layout>
  </>
)

export default IndexPage
