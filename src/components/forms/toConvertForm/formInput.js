import React, { useEffect } from "react"
import { Paper, TextField } from "@mui/material"

import { Button } from "gatsby-theme-material-ui"

import { useForm } from "react-hook-form"

export default function FormInput(props) {
  const { register, handleSubmit } = useForm()

  return (
    <Paper
      elevation="3"
      display="flex"
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit(props.onSubmit)}
      sx={{ padding: "30px", display: { sm: "column" } }}
    >
      <TextField
        label="Ecrire Chiffres"
        type="number"
        name="inputValue"
        variant="outlined"
        size="small"
        sx={{ width: "66%" }}
        {...register("inputValue", { required: true, minLength: 1 })}
      />

      <Button
        sx={{ padding: "7px", marginLeft: "2px" }}
        variant="contained"
        type="submit"
      >
        Ecrire
      </Button>
    </Paper>
  )
}
