import React from "react"
import { Container, Grid, Box } from "@mui/material"

const PageBody = () => {
  return (
    <Container>
      <Grid my={3} container spacing={2}>
        <Grid item sx={{ backgroundColor: "aqua" }} md={2}>
          xs=8
        </Grid>
        <Grid item sx={{ backgroundColor: "pink" }} md={8}>
          xs=4
        </Grid>
        <Grid item sx={{ backgroundColor: "silver" }} xs={2}>
          xs=4
        </Grid>
      </Grid>
    </Container>
  )
}
export default PageBody
