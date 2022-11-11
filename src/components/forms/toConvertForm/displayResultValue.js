import {
  Button,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState, useEffect } from "react"

import { styled } from "@mui/material/styles"
const StyledPaper = styled(Paper)`
  background-color: #f6f8fa;
  margin: 0;
  padding: 2rem 1rem;
  border-radius: 10px;
  padding: 1rem 1rem 4rem 1rem;
`
const DisplayResultValue = ({ resultValue }) => {
  useEffect(() => {
    const el = document.getElementById("content")
    console.log(el.value)
  }, [])

  return (
    <Box sx={{ my: "50px" }}>
      <StyledPaper variant="outlined" id="content">
        <InputBase
          id="content"
          fullWidth
          readOnly
          sx={{ fontSize: "1.1rem" }}
          multiline
          value={resultValue}
          endAdornment={
            <InputAdornment position="end">
              <Button variant="outlined">Copier</Button>
            </InputAdornment>
          }
        />
      </StyledPaper>
    </Box>
  )
}

console.log("hi")
export default DisplayResultValue
