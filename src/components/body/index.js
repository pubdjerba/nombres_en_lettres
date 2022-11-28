import React from "react"
import { Container, Grid, Button, Typography } from "@mui/material"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ArticlesList from "../articleslist"
import { Stack } from "@mui/system"

const PageBody = () => {
  const Numbers = [20, 70, 80, 90, 1500]
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <StaticImage src="../../images/team.svg" alt="chiffre en lettres" />
        </Grid>
        <Grid item md={4}>
          <Stack direction="column" alignItems="flex-start" marginBottom={2}>
            <ArticlesList />
          </Stack>

          <Stack direction="column" alignItems="flex-start">
            <Typography
              sx={{ padding: "0.5rem", fontSize: "1rem", fontWeight: "600" }}
            >
              Les chiffres les plus recherchés:
            </Typography>
            {Numbers.map((number, i) => (
              <Button
                sx={{
                  textTransform: "none",
                  color: "inherit",
                }}
                key={i}
                component={Link}
                to={`/conversion/comment-ecrire-${number}-en-lettres/`}
              >
                {`Comment écrire ${number} en lettres ?`}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
export default PageBody
