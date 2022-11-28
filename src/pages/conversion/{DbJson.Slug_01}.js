import React, { useState, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import FormInput from "../../components/forms/toConvertForm/formInput"
import useNumberToLetter from "../../components/lib/numberToLetter"
import DisplayResultValue from "../../components/forms/toConvertForm/displayResultValue"
import { Link } from "gatsby"
import PageBody from "../../components/body"

const items = [-100, -50, -10, -1, 1, 10, 50, 100]

const ConvertPage = props => {
  const [numberValue, setNumbertoletter] = useNumberToLetter()
  const [value, setValue] = useState(props.data.dbJson.number)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setNumbertoletter(value)
    setVisible(visible => (visible = true))
  }, [value, setNumbertoletter])
  const nb = props.data.dbJson.number
  console.log(props)
  return (
    <Layout>
      <Box sx={{ my: "80px", textAlign: "center" }}>
        <Typography
          variant="h4"
          color="initial"
          component="h1"
          fontWeight={700}
        >
          Convertisseur des nombres en lettres gratuit.
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          component="h3"
          maxWidth="md"
          textAlign="center"
          margin="auto"
        >
          Nous mettons à votre disposition un convertisseur des chiffres en
          lettres, qui vous permet de convertir les chiffres instantanément et
          gratuitement en toutes lettres et selon les recommandations de
          l'Académie Française.
        </Typography>
      </Box>

      <Container maxWidth="md">
        <FormInput
          onSubmit={data => setValue(value => (value = data.inputValue))}
        />
        <Box sx={{ mt: "1rem" }}>
          {visible && (
            <Typography fontWeight="600" variant="body1" color="#1187F3">
              Le nombre {value} en lettres:
            </Typography>
          )}
        </Box>
        {visible && <DisplayResultValue resultValue={numberValue} />}
        <Box paddingBottom={5}>
          <Typography variant="body1" fontWeight={600} color="initial">
            Les internautes ont également cherché :
          </Typography>
          <Stack direction="row" flexWrap="wrap">
            {items.map(
              (item, i) =>
                nb + item >= 0 &&
                nb + item <= 4000 && (
                  <Button
                    key={i}
                    variant="text"
                    sx={{ textTransform: "none", color: "inherit" }}
                    component={Link}
                    to={`/conversion/comment-ecrire-${item + nb}-en-lettres`}
                  >
                    {item + nb} en lettres
                  </Button>
                )
            )}
          </Stack>
        </Box>
      </Container>
      <PageBody />
    </Layout>
  )
}

export default ConvertPage
export const query = graphql`
  query ($id: String) {
    dbJson(id: { eq: $id }) {
      ID
      number
      Slug_01
    }
  }
`
