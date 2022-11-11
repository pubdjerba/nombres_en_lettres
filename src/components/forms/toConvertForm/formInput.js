import React from "react"
import { Paper, TextField, Button, Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useForm } from "react-hook-form"
import { padding, Stack } from "@mui/system"

const StyledPaper = styled(Paper)`
  padding: 3rem 2rem;
`

export default function FormInput(props) {
  const { register, handleSubmit } = useForm()
  return (
    <Box>
      <Typography padding="1rem" variant="h6" fontWeight="600" align="center">
        Entrer le nombre que vous voulez convertir en toutes lettres:
      </Typography>

      <StyledPaper
        elevation="5"
        component="form"
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <Stack direction="row">
          <TextField
            label="Ecrire Chiffres"
            autoComplete
            autoFocus
            required
            type="number"
            name="inputValue"
            variant="outlined"
            size="small"
            {...register("inputValue", { required: true, minLength: 1 })}
            fullWidth
          />

          <Button
            sx={{ py: "0.475rem", px: "2rem", marginLeft: "3px" }}
            variant="contained"
            type="submit"
          >
            convertir
          </Button>
        </Stack>
      </StyledPaper>
    </Box>
  )
}
