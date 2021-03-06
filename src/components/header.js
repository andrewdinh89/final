import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerStyles from "../components/header.module.css"
import Styles from "../pages/styles/styles.css"
const Header = ({ siteTitle, siteDescription , about, contact, blog}) => (
  <header
    style={{
      background: `rgba(50,50,50,0.8)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{color: `rgba(223,227,235,0.4)`, margin: `0 0 0 0.9rem`}}>{siteDescription}</h3>
      <div style={{margin: `0 auto`, maxWidth: 960, padding: `1.45 1.08rem`, display: `flex`}}>
        <h4 style={{marginRight: `0.9rem`}}>
           <Link to="/blog">Blog</Link>
        </h4>
        <h4 style={{marginRight: `0.9rem`}}>
           <Link to="/about">About</Link>
        </h4>
        <h4 style={{marginRight: `0.9rem`}}>
           <Link to="/contact">Contact</Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
