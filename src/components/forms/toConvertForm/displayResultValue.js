import {
  Button,
  ClickAwayListener,
  InputAdornment,
  InputBase,
  Paper,
  Tooltip,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"

import { styled } from "@mui/material/styles"
const StyledPaper = styled(Paper)`
  background-color: #f6f8fa;
  margin: 0;
  padding: 2rem 1rem;
  border-radius: 10px;
  padding: 1rem 1rem 4rem 1rem;
`
const DisplayResultValue = ({ resultValue }) => {
  const [open, setOpen] = useState(false)
  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  function CopyValue() {
    var copyText = document.getElementById("content")

    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices

    navigator.clipboard.writeText(copyText.value).then(
      () => {
        handleTooltipOpen()
      },
      () => {
        console.log("clipboard write failed")
      }
    )
  }

  return (
    <Box sx={{ mt: "0.5rem", marginBottom: "2rem" }}>
      <StyledPaper variant="outlined">
        <InputBase
          id="content"
          fullWidth
          readOnly
          sx={{ fontSize: "1.1rem" }}
          multiline
          value={resultValue}
          endAdornment={
            <InputAdornment
              sx={{ display: { xs: "none", sm: "block" } }}
              position="end"
            >
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                  <Tooltip
                    open={open}
                    arrow
                    placement="top"
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#1187F3",
                          "& .MuiTooltip-arrow": {
                            color: "#1187F3",
                          },
                        },
                      },
                    }}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Texte copié !"
                  >
                    <Button variant="outlined" onClick={CopyValue}>
                      Copier
                    </Button>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </InputAdornment>
          }
        />
      </StyledPaper>
    </Box>
  )
}

export default DisplayResultValue
