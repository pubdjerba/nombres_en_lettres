import React from "react"
import { ContentCopy, Brightness1, MonetizationOn } from "@mui/icons-material"

import { IconButton } from "gatsby-theme-material-ui"

export const CopyTool = () => {
  return (
    <IconButton
      aria-label="delete"
      onClick={() => {
        alert("hi")
      }}
    >
      <ContentCopy />
    </IconButton>
  )
}

export const ColorTool = () => {
  return (
    <IconButton aria-label="delete">
      <Brightness1 />
    </IconButton>
  )
}

export const DollarTool = () => {
  return (
    <IconButton aria-label="delete">
      <MonetizationOn />
    </IconButton>
  )
}
