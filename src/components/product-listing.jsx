import * as React from "react"
import { ProductCard } from "./product-card"


// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products }) {
  return (
    // <div className={listingContainerStyle}>
    // <div className="masonry">
    <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'375px', overflow:'hidden', position:'relative', padding:' 0'}}><div className="RArrow" style={{fontSize:'1rem', position:'absolute', right:'20px', top:'0', zIndex:'1', color:'#dd4000', filter:' drop-shadow(1px 1px 0px rgba(228, 223, 223, 0.5))'}}>
    scroll <span style={{fontSize:'18px'}}>&#10095;</span>
  </div>
      <div className="horizontal-scroll-wrapper squares" style={{margin:'30px auto 0 auto', width:'', padding:'0'}}>
      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
    </div>
    </div>
  )
}
