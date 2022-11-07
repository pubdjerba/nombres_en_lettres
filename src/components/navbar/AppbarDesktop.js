import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { menuItems } from "./menuItems"
import { Stack } from "@mui/system"

export default function AppbarDesktop({ siteTitle }) {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box maxWidth="40px">
              <StaticImage src="../../images/logo.svg" />
            </Box>
            <Typography variant="h5" fontWeight="700" component="h2">
              {siteTitle}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            {menuItems.map((item, i) => (
              <Button
                component={Link}
                to={item.link}
                key={i}
                sx={{ color: "#fff", fontSize: "1.1rem", fontWeight: "500" }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
