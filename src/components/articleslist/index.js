import React from "react"
import { Link } from "gatsby"
import { Button, Box } from "@mui/material"
import { useAllMarkdownRemark } from "../../hooks/use-all-markdownremark"

const ArticlesList = () => {
  const { edges } = useAllMarkdownRemark()
  return (
    <>
      {edges.map(({ node }, i) => (
        <Button
          sx={{ textTransform: "none", color: "inherit", fontSize: "1rem" }}
          key={i}
          component={Link}
          to={`/blog/${node.frontmatter.slug}`}
        >
          {node.frontmatter.title}
        </Button>
      ))}
    </>
  )
}

export default ArticlesList
