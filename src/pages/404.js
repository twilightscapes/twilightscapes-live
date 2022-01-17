import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"

import { AiFillRobot } from "react-icons/ai"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <br /> <br />
        <AiFillRobot
          style={{
            fontSize: "160px",
            color: "var(--primary-color)",
            margin:'0 auto',
        textAlign:'center'
          }}
        />
        <h1 className="neonText" style={{fontSize:'200%'}}>Well, Shit.</h1>
        <p className="neonText" style={{fontSize:'150%', margin:'2rem'}}>
          That wasn't supposed to happen.
        </p>
      </header>

      <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
        <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link>
      <Link to="/contact" className="button">
        Report this <RiBugLine className="icon -right" />
      </Link></div>

    </div>
    <div className="spacer33"></div> 
  </Layout>
)

export default NotFound
