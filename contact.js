import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <p>If everyone would like to share with your thought please contact to me via andrewdinh1989@gmail.com.
                Thanks so much for spending time to read my blog and Have a great beatiful day (^^)....
            </p>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}
export default Contact