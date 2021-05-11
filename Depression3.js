import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const Depression3 = () => {
    return (
        <Layout>
            <SEO title="How Is Major Depression Diagnosed?" />
            <img src="https://source.unsplash.com/random/400x400" alt="randImage" />
            <h2>How Is Major Depression Diagnosed?</h2>
            <p>Published 12 months ago</p>
            <p>Written By Jimmy Le</p>
            <p>
            A health professional -- such as your primary care doctor or a psychiatrist -- will perform a thorough medical evaluation. You might receive a screening for depression at a regular doctor’s visit. The professional will ask about your personal and family psychiatric history and ask you questions that screen for the symptoms of major depression.

There is no blood test, X-ray, or other laboratory test that can be used to diagnose major depression. However, your doctor may run blood tests to help detect any other medical problems that have symptoms similar to those of depression. For example, hypothyroidism can cause some of the same symptoms as depression, as can alcohol or drug use and abuse, some medications, and stroke.</p>
            <Link to="/blog">Go Back</Link>
        </Layout>
    )
}
export default Depression3