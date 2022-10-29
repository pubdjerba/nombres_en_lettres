import React from "react"
import { Link } from "gatsby"
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { menuItems } from "./menuItems"
import { styled } from "@mui/material/styles"
import { Colors } from "../../styles/theme"
import { Stack } from "@mui/system"

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export default function AppbarDesktop({ siteTitle }) {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box maxWidth="40px">
              <StaticImage src="../../images/logo.svg" />
            </Box>
            <Typography>{siteTitle}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            {menuItems.map((item, i) => (
              <StyledLink sx={{ color: "#ffff" }} to={item.link} key={i}>
                {item.name}
              </StyledLink>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
