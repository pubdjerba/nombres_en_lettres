import {
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import AssignmentIcon from "@mui/icons-material/Assignment"

const DisplayResultValue = ({ resultValue }) => {
  return (
    <Box sx={{ my: "50px" }}>
      <Paper variant="outlined" sx={{ pb: "60px", pt: "16px" }}>
        <InputBase
          sx={{
            paddingLeft: "16px",
            fontSize: { xs: "16px", sm: "18px", md: "24px", lg: "24" },
            fontWeight: "600",
          }}
          id="content"
          multiline
          fullWidth
          value={resultValue}
          endAdornment={
            <InputAdornment position="end">
              <IconButton large>
                <AssignmentIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Paper>
    </Box>
  )
}

export default DisplayResultValue
