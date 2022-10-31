import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function UrlLinks() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allDbJson {
            edges {
              node {
                Slug_01
              }
            }
          }
        }
      `}
      render={data => <h1>{console.log(data)}</h1>}
    />
  )
}
