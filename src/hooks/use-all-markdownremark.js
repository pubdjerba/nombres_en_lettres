import { useStaticQuery, graphql } from "gatsby"

export const useAllMarkdownRemark = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query AllMarkdownRemark {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
