import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "gatsby"
import * as React from "react"

export default function Footer({ webSiteUrl }) {
  return (
    <footer>
      <Box py={{ xs: 1, sm: 3 }} bgcolor="text.secondary" color="white">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Typography
                  component={Link}
                  to="/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Accueil
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={Link}
                  to="/contact/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Contact
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={Link}
                  to="/legal/politique-de-confidentialite/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Politique de confidentialité
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={Link}
                  to="/legal/conditions-utilisation/"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  Condition d’utilisation
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 1, sm: 3 }} pb={{ xs: 5, sm: 0 }}>
            Copyright © {new Date().getFullYear()} Nombres en Lettres
            <Typography variant="body1" color="inherit">
              Tous droits réservés
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
