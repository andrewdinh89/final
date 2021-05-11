import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const Depression2 = () => {
    return (
        <Layout>
            <SEO title="Who Is at Risk for Major Depression?" />
            <img src="https://source.unsplash.com/random/400x400" alt="randImage" />
            <h2>Who Is at Risk for Major Depression?</h2>
            <p>Published 11 months ago</p>
            <p>Written By Kayla Tran</p>
            <p>
            Major depression affects about 6.7% of the U.S. population over age 18, according to the National Institute of Mental Health. Overall, between 20% and 25% of adults may suffer an episode of major depression at some point during their lifetime.

Major depression also affects older adults, teens, and children, but frequently goes undiagnosed and untreated in these populations.
            </p>
            <Link to="/blog">Go Back</Link>
        </Layout>
    )
}
export default Depression2