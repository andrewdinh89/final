import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <h1>About</h1>
            <p>My name is Duc and This page is about me!</p>
            <p>I come from Vietnam and 30 years old</p>
            <p>My hobbies are playing sports such as basketball, soccer, basseball. However I would like travel to somewhere around the US.</p>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}
export default About