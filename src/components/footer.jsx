import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Social from "../components/social"
import Consent from "../components/Consent"
import Install from "../components/Install-footer"
import Icons from "../util/socialmedia.json"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk, FaHeart } from "react-icons/fa"


import { Link } from "gatsby"
import {
  footerStyle,
  links,
  blurb,
  // logos,
} from "./footer.module.css"


const sIcons = Icons.socialIcons.map((icons, index) => {
  
  return (


    <div key={"social icons" + index}>
      {icons.icon === "facebook" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiFacebookBoxFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "twitter" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiTwitterFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "linkedin" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiLinkedinBoxFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "youtube" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiYoutubeFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "instagram" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiInstagramFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "rss" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiRssFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "github" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiGithubFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "telegram" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiTelegramFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "pinterest" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiPinterestFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "snapchat" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiSnapchatFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "skype" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiSkypeFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "wordpress" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <FaWordpress />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "dribbble" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <RiDribbbleFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "medium" ? (
        <a href={icons.url} rel="noreferrer" target="_blank">
          <RiMediumFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "behance" ? (
        <a href={icons.url} rel="noreferrer" target="_blank">
          <RiBehanceFill />
        </a>
      ) : (
        ""
      )}
      {icons.icon === "vk" ? (
        <a className="social" href={icons.url} rel="noreferrer" target="_blank">
          <FaVk />
        </a>
      ) : (
        ""
      )}
    </div>

  )
})


export function Footer() {
  const { companyname } = useSiteMetadata()
  return (
<>
    

    <footer className={footerStyle} style={{padding:'10px 0', marginTop:'0',}}>

    <Consent />
{/* <div style={{width:'50%', border:'1px groove', margin:'1rem auto'}}></div> */}
    <Install />
    
      <div className={blurb}>


        <Link state={{modal: true}} to="/contact/" className="navbar-item  button fire" style={{margin:'2rem', textDecoration:'none'}}>Contact Me - I &nbsp;<FaHeart />&nbsp;feedback!</Link>

 <div >
        {/* <Social /> */}

        <div className="social-icons" style={{textAlign:'center', justifyContent:'center', margin:'3rem 5px'}}>
  <div className="socialtext" style={{fontSize:'14px'}}>I&apos;m<br />Social</div>
        {sIcons}
        </div>
        </div>

        
      </div>
      <nav className={links} aria-label="footer">
      <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem', textDecoration:'none'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>
  
  
  
  <div style={{textAlign: 'center', margin: '0 0 4rem 0', justifyContent: 'center', fontSize: '.75rem', textDecoration:'none'}}>Copyright &copy; {(new Date().getFullYear())}<a href="https://toddlambert.com">Todd Lambert</a>- hand crafted Gatsby on Netlify</div>
      </nav>
   
    </footer>
    </>
  )
}


