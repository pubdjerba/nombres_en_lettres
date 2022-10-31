import React, { useState, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Box, Container, TextField } from "@mui/material"
import FormInput from "../../components/forms/toConvertForm/formInput"
import useNumberToLetter from "../../components/lib/numberToLetter"
import DisplayResultValue from "../../components/forms/toConvertForm/displayResultValue"
import { Link } from "gatsby-theme-material-ui"
import UrlLinks from "../../components/links"

const items = [1, 2, 3, 4, 5]

const ConvertPage = props => {
  const [numberValue, setNumbertoletter] = useNumberToLetter()
  const [value, setValue] = useState(props.data.dbJson.number)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setNumbertoletter(value)
    setVisible(visible => (visible = true))
  }, [value])
  const nb = props.data.dbJson.number
  return (
    <Layout>
      <Box sx={{ my: "80px", textAlign: "center" }}>
        {visible && (
          <Box>
            <h1>Comment écrire {value} en lettres :</h1>
            <h2>{numberValue}</h2>
          </Box>
        )}
      </Box>
      Links:
      {items.map(item => (
        <Link to={`/conversion/comment-ecrire-${item + nb}-en-lettres`}>
          Comment écrire {item + nb}
        </Link>
      ))}
      <Container maxWidth="md">
        <FormInput
          onSubmit={data => setValue(value => (value = data.inputValue))}
        />
        {visible && <DisplayResultValue resultValue={numberValue} />}
        <UrlLinks />
      </Container>
    </Layout>
  )
}

export default ConvertPage
export const query = graphql`
  query ($id: String) {
    dbJson(id: { eq: $id }) {
      ID
      Slug_01
      Slug_02
      number
    }
  }
`
