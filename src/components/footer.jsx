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
        <Link className="social" to={icons.url} target="_blank">
          <RiFacebookBoxFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "twitter" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiTwitterFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "linkedin" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiLinkedinBoxFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "youtube" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiYoutubeFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "instagram" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiInstagramFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "rss" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiRssFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "github" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiGithubFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "telegram" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiTelegramFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "pinterest" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiPinterestFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "snapchat" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiSnapchatFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "skype" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiSkypeFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "wordpress" ? (
        <Link className="social" to={icons.url} target="_blank">
          <FaWordpress />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "dribbble" ? (
        <Link className="social" to={icons.url} target="_blank">
          <RiDribbbleFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "medium" ? (
        <Link to={icons.url} target="_blank">
          <RiMediumFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "behance" ? (
        <Link to={icons.url} target="_blank">
          <RiBehanceFill />
        </Link>
      ) : (
        ""
      )}
      {icons.icon === "vk" ? (
        <Link className="social" to={icons.url} target="_blank">
          <FaVk />
        </Link>
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


