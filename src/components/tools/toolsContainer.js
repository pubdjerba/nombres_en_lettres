import { Container } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import ResultPaper from "./resultpaper"
import { ColorTool, CopyTool, DollarTool } from "./toolitems"

const ToolsContainer = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="flex-end">
        <CopyTool />
        <ColorTool />
        <DollarTool />
      </Box>
      <ResultPaper />
      <Box sx={{ mb: "200px" }}></Box>
    </Container>
  )
}

export default ToolsContainer
