import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../pages/styles/styles.css"
const Spaghetti = () => {
    return (
        <Layout>
            <SEO title="Spaghetti" />
            <img src="https://source.unsplash.com/random/400x400" alt="randImage" />
            <h2>How to Cook Spaghetti Squash</h2>
            <p>Published 9 months ago</p>
            <p>Written By Jason Pierre</p>
            <p>First things first: cut it in half lengthwise. Then, scoop out the seeds.

Next, drizzle the insides lightly with olive oil and sprinkle with salt and pepper. I find that adding too much oil and too much salt at this stage makes the squash a bit watery, so a light drizzle and a light sprinkle will do.

Then, poke a few holes in the skin of the squash with a fork and place it cut side down on a baking sheet. Pop it in a pre-heated 400°F oven.

A mistake I used to make was roasting my squash too long. I used to roast it for an hour or longer, but now I roast it for 30 to 40 minutes. I initially thought the squash needed to be super soft and fork tender in order for the strands to “spaghetti,” but over the years I’ve learned that I prefer my strands to be more al dente (and less mushy), and that the 1 hour mark was too long. Of course, the timing will entirely depend on the size of your squash and the heat of your particular oven. It can also vary from squash to squash, so adjust your cooking time accordingly.
            </p>
            <Link to="/blog">Go Back</Link>
        </Layout>
    )
}
export default Spaghetti