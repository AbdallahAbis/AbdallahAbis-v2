import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data, location }) => {
  return <Layout location={location}></Layout>
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
