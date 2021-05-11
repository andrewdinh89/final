
import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Auth0Provider, useAuth0} from "@auth0/auth0-react"
import Styles from "../pages/styles/styles.css"

import People from "../components/people"
const Blog = () => {

  const{isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
     const query = (graphql`
      
     {
       allContentfulBlog {
         edges {
           node {
             body {
               raw
             }
             author
             slug
             title
             publishDate(formatString: "", fromNow: true)
           }
         }
       }
     }
   `)

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};








    return (
        <Layout>
          
          {
            !isAuthenticated && (
              <button>
                <Link to ="https://dev-ys7odhhp.us.auth0.com/login?state=hKFo2SBhNUhmQ3A4QWFlaUNQZ1FhNkkzV3c3bEdxdHFSaWtkQaFupWxvZ2luo3RpZNkgTDNYSmg3eU56YmRVcGRqN2JsQkpVWjNGd3FpZ2FRTHSjY2lk2SA5VGtqV1ZEQXVLWkJpY2RBVEh5YW5qVEpTcDRnTlhGSQ&client=9TkjWVDAuKZBicdATHyanjTJSp4gNXFI&protocol=oauth2&prompt=consent&response_type=code&redirect_uri=https%3A%2F%2Fmanage.auth0.com%2Ftester%2Fcallback%3Fconnection%3Dgoogle-oauth2&scope=openid%20profile"></Link>Log In</button>
              
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
                            <button onClick={() => Sign-out()}>Sign-Out</button>
                        </div>

                
            
            
          </Layout>
       
    )
}
export default Blog