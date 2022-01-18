import * as React from "react"
import { ProductCard } from "./product-card"
import TwilightLogo from "../../static/assets/TSidebarHover.svg"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products }) {
  return (
    <>
    {/* // <div className={listingContainerStyle}>
    // <div className="masonry"> */}
   <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}>
      
      <TwilightLogo style={{
      filter:'brightness(0.3)contrast(4.4)hue-rotate(117deg)saturate(9.9)', maxWidth:'50vw', opacity:'.8',
      position:'absolute', zIndex:'-1', top:'15vh'}} />
    
      <div className="RArrow">
     <span></span>
    </div>
    <div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>


<div style={{width:'1000px', height:'1000px'}}></div>

      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
    </div>
    </div>
    {/* <div className="spacer33" /> */}
    </>
  )
}
