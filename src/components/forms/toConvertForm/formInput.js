import React from "react"
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  styled,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useForm } from "react-hook-form"

const StyledTextField = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

const StyledPaper = styled(Paper)`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
`

export default function FormInput(props) {
  const { register, handleSubmit } = useForm()
  return (
    <Box>
      <Typography
        gutterBottom
        variant="subtitle1"
        fontWeight="600"
        align="center"
      >
        Entrer le nombre que vous voulez convertir en toutes lettres:
      </Typography>

      <StyledPaper
        elevation={5}
        component="form"
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <Stack direction="row" justifyContent="center" alignItems="top">
          <StyledTextField
            label="Ecrire un nombre"
            fullWidth
            required
            type="number"
            name="inputValue"
            variant="outlined"
            size="small"
            {...register("inputValue", { required: true, minLength: 1 })}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginLeft: "3px",
              lineHeight: "0",
              display: { xs: "block", sm: "none" },
            }}
          >
            <SendIcon />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              marginLeft: "3px",
              width: "7.5rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            convertir
          </Button>
        </Stack>
      </StyledPaper>
    </Box>
  )
}
