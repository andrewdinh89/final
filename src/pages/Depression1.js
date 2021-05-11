import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const Depression1 = () => {
    return (
        <Layout>
            <SEO title="What Is Major or Clinical Depression?" />
            <img src="https://source.unsplash.com/random/400x400" alt="randImage" />
            <h2>What Is Major or Clinical Depression?</h2>
            <p>Published 10 months ago</p>
            <p>Written By Duc Dinh</p>
            <p>Most people feel sad or low at some point in their lives. But clinical depression is marked by a depressed mood most of the day, sometimes particularly in the morning, and a loss of interest in normal activities and relationships -- symptoms that are present every day for at least 2 weeks. In addition, according to the DSM-5 -- a manual used to diagnose mental health conditions -- you may have other symptoms with major depression. Those symptoms might include:

Fatigue or loss of energy almost every day
Feelings of worthlessness or guilt almost every day
Impaired concentration, indecisiveness
Insomnia or hypersomnia (excessive sleeping) almost every day
Markedly diminished interest or pleasure in almost all activities nearly every day (called anhedonia, this symptom can be indicated by reports from significant others)
Restlessness or feeling slowed down
Recurring thoughts of death or suicide
Significant weight loss or gain (a change of more than 5% of body weight in a month)
            </p>
            <Link to="/blog">Go Back</Link>
        </Layout>
    )
}
export default Depression1