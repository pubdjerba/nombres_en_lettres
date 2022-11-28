import { Box, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Banner = () => {
  return (
    <Container maxWidth="md">
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={6} sx={{ px: "2rem", py: "1rem" }}>
          <Typography fontWeight="900" variant="h3" component="h1">
            Ecrire les chiffres en toutes lettres
          </Typography>
          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
            fontWeight="600"
            variant="h5"
            paddingTop="1rem"
          >
            Avec cet outil vous pouvez convertir les chiffres en lettres sans
            fautes d'orthographe
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }} flex={6}>
          <StaticImage
            src="../../images/heroimage.svg"
            alt="chiffre en lettres"
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Banner
