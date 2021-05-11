
import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Auth0Provider, useAuth0} from "@auth0/auth0-react"
import Styles from "../pages/styles/styles.css"


const Blog = () => {

  const{isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
     const query = (graphql`
  {
    allContentfulBlog(sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishDate(fromNow: true, formatString: "dd MMMM, YYYY")
          body {
            raw
          }
        }
      }
    }
  }
`)










    return (
        <Layout>
          
          {
            !isAuthenticated && (
              <button onClick={() => loginWithRedirect}>Log In</button>
            )
          }
          {
            isAuthenticated && (
              <div>
                 <SEO title="Blog" />
            
            
                        
                            <h2>How to Cook Spaghetti Squash</h2>
                            <p>Published 9 months ago</p>
                            <p>Written By Jason Pierre</p>
                            <Link to="/Spaghetti">Read More...</Link>
                        
              </div>
            )
          }
            <SEO title="Blog" />
            
            
                        <div>
                            <h2>How to Cook Spaghetti Squash</h2>
                            <p>Published 9 months ago</p>
                            <p>Written By Jason Pierre</p>
                            <Link to="/Spaghetti">Read More...</Link>
                        </div>
                    
              <hr/>
              <SEO title="Blog" />
            
            
                        <div>
                            <h2>What Is Major or Clinical Depression?</h2>
                            <p>Published 10 months ago</p>
                            <p>Written By Duc Dinh</p>
                            <Link to="/Depression1">Read More...</Link>
                        </div>
                <hr/>
                <SEO title="Blog" />
            
            
                        <div>
                            <h2>Who Is at Risk for Major Depression?</h2>
                            <p>Published 11 months ago</p>
                            <p>Written Kayla Tran</p>
                            <Link to="/Depression2">Read More...</Link>
                        </div>
                <hr/>
                <SEO title="Blog" />
            
            
                        <div>
                            <h2>How Is Major Depression Diagnosed?</h2>
                            <p>Published 12 months ago</p>
                            <p>Written Jimmy Le</p>
                            <Link to="/Depression3">Read More...</Link>
                            <br/>
                            <button onClick={() => logout()}>Sign-Out</button>
                        </div>

                
            
            
          </Layout>
       
    )
}
export default Blog