import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

export default function Contact() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", p: 1 }}>
          <StaticImage
            src="../../images/logo.svg"
            alt="nombres en lettres logo"
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Nous Contacter
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom"
            name="name"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            multiline
            rows={5}
            required
            fullWidth
            name="message"
            label="Message"
            id="message"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 6 }}
          >
            Envoyer
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
