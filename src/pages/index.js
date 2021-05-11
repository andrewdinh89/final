import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Auth0Provider } from "@auth0/auth0-react"




const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            data
          }
          html
        }
      }
    }
  }
`)

  return (
  <Layout>
    <SEO title="Home" />
    {
      data.allMarkdownRemark.edges.map(({node}) => {
      return (
        <div>
          <h1>{node.frontmatter.title}</h1>
          <h4>{node.frontmatter.data}</h4>
          <div
  dangerouslySetInnerHTML={{__html: node.html }}></div>
    
          <hr style={{height: "3px"}}/>
        </div>
      )  
      })
    }
    <p>Need some questions? <Link to="/contact">Click Here!</Link></p>
    
  </Layout>
)
}
export default IndexPage
