import * as React from "react"
import { ProductCard } from "./product-card"
import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import Newsignup from "../components/newssign"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products }) {
  return (
    <>
    {/* // <div className={listingContainerStyle}>
    // <div className="masonry"> */}

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}>
      
<TwilightLogo className="bglogo" />
    
      <div className="RArrow">
     <span></span>
    </div>
    <div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>


    <div className="introspacer" style={{}}></div>

<div className="intropanel">
  {/* <Link to="/contact">
 
  </Link> */}
</div>

      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}

<div className="donation" style={{}}>
{/* <Link to="/contact"> */}
<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>
  <Newsignup />
  </div>
{/* </Link> */}
</div>
    </div>




    </div>
    {/* <div className="spacer33" /> */}
    </>
  )
}
