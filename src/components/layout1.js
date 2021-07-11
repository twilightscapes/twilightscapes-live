/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import Logo from "./logo"
// import Navigation from "./Navbar2"

import "../assets/scss/style.scss"

import "../styles/global.css"
// import Footer from ".footer"
// import Theme from "../components/theme"
// import Search from "../components/search"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      {/* <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <Navigation />
        </div>
      </Header> */}
      <main className={" container " + className}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
