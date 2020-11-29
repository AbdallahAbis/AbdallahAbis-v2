import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data)
  return <Layout navigationData={data.strapi.navigation}></Layout>
}

export default IndexPage

export const indexQuery = graphql`
  {
    strapi {
      navigation {
        nav
      }
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
