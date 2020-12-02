import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Header data={data.strapi.hero} />
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  {
    strapi {
      hero {
        Name
        subtitles
        description
        button1
        button2
      }
    }
  }
`
