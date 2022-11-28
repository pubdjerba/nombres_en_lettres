import React, { useState, useEffect } from "react"
import { Box, Container, Typography } from "@mui/material"
import FormInput from "./formInput"
import useNumberToLetter from "../../lib/numberToLetter"
import DisplayResultValue from "./displayResultValue"

const ToConvertForm = resultValue => {
  const [numberValue, setNumbertoletter] = useNumberToLetter()
  const [value, setValue] = useState()
  const [visible, SetVisible] = useState(false)

  useEffect(() => {
    if (value !== undefined && value >= 0) {
      setNumbertoletter(value)
      SetVisible(visible => (visible = true))
    }
  }, [value])

  return (
    <Container maxWidth="md">
      <FormInput
        onSubmit={data => {
          setValue(value => (value = data.inputValue))
        }}
      />
      <Box sx={{ mt: "1rem" }}>
        {visible && (
          <Typography fontWeight="600" variant="body1" color="#1187F3">
            Le nombre {value} en lettres:
          </Typography>
        )}
      </Box>
      {visible && <DisplayResultValue resultValue={numberValue} />}
    </Container>
  )
}

export default ToConvertForm
