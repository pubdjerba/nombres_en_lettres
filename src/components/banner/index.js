import { Box, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Banner = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={6}>
          <Typography fontWeight="900" variant="h2" component="h1">
            Ecrire les chiffres en toutes lettres
          </Typography>
          <Typography fontWeight="700" variant="h4" paddingTop="50px">
            Avec cet outil vous pouvez convertir les chiffres en lettres sans
            fautes d'orthographe
          </Typography>
        </Box>
        <Box flex={6}>
          <Box display="flex" justifyContent="center">
            <StaticImage src="../../images/heroimage.svg" />
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default Banner
