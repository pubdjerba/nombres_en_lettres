import React, { useState, useEffect } from "react"
import { Box, Container, TextField } from "@mui/material"
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
      
      {visible && <h1>{value} en lettres</h1>}
      <FormInput
        onSubmit={data => {
          setValue(value => (value = data.inputValue))
        }}
      />
      {visible && <DisplayResultValue resultValue={numberValue} />}
    </Container>
  )
}

export default ToConvertForm
