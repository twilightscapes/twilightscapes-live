import React from "react"
import { Link } from "gatsby"
import logo from '../../static/assets/tw-logo-white.svg'

const Logo = props => (
  <div className="site-logo" style={{}}>
    <Link to="/"><img id="logo" className="logo rollIn" src={logo} alt="Twilightscapes Logo" style={{position:'', width:'100px', paddingTop:'5px'}} /></Link>
  </div>
)

export default Logo
