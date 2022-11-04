import React from "react"
import Container from "@mui/material/Container"
import Layout from "../../components/layout"
import Rgpd from "../../components/legal/rgpd"

const Privacy = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Rgpd />
      </Container>
    </Layout>
  )
}

export default Privacy
