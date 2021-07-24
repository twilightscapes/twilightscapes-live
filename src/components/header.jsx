

import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"

import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../../static/assets/search"
import { ImArrowRight } from "react-icons/im"
import { Toast } from "./toast"
import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "./header.module.css"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={container} >



      <header className={header} style={{border:'0px solid red', background:'transparent', padding:'10px 3% 15px 3%', boxShadow: '1px 3px 24px 0 #000', boxShadow: 'none'
      }}
      
      sx={{
        bg: "siteColor",
      }}
      
      >
        
      <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'5px 0 0 0', minWidth:'100px', height:'auto', padding:'0', border:'0px solid red'}} /></Link>



     




        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

   <div id="sidebarMenu">

   <div style={{display:'flex', justifyContent:'flex-start', color:'#fff', paddingLeft:'20px'}}>
   
   <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div>
     </div>

    <ul className="sidebarMenuInner">

    {/* <li>
              <a className="navbar-item txtshadow" href="/">
                Home <span>Return to home</span>
              </a>
      </li> */}

      <li>
              <Link className="navbar-item txtshadow" to="/products/">
                NFTs <span>Limited Editions</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/vault/gallery1/">
                The Vault <span>View the full archives</span>
              </Link>
      </li>


      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>

      <li>
      <Link className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>

       <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact <span>Ask me anything!</span>
              </Link>
      </li>

      {/* <li>
      <Link to="/search" >
          <span>Search Catalog <SearchIcon /></span>
        </Link>
        </li> */}

    

    </ul>
  </div>
        {/* <Logo /> */}
        <Navigation className={nav} />
        
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
            {/* <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg> */}
          </>
        )}
      </Toast>
    </div>
  )
}
