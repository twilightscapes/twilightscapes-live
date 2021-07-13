import * as React from "react"
// import Logo from "../icons/logo"
import Social from "../components/social"
import { Link } from "gatsby"
import {
  footerStyle,
  links,
  blurb,
  logos,
} from "./footer.module.css"

export function Footer() {
  return (

    
    <footer className={footerStyle} style={{padding:'10px 0', marginTop:'0', position:'',}}>
      <div className={blurb}>
        <div className={logos}>
        <Social />
        </div>

        <Link state={{modal: true}} to="/contact/" className="navbar-item  button">Contact Me&nbsp;  - &nbsp;&nbsp;<span> I love feedback!</span></Link>


      </div>
      <nav className={links} aria-label="footer">
      <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>
  
  
  
  <div style={{textAlign: 'center', margin: '0 0 4rem 0', justifyContent: 'center', fontSize: '.65rem'}}>Copyright &copy; {(new Date().getFullYear())} Todd Lambert - hand crafted Gatsby on Netlify</div>
      </nav>
   
    </footer>
  )
}


{/* <Link to="/legal/" state={{modal: true}}>View License Agreement</Link> */}