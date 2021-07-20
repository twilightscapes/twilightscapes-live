import * as React from "react"
import { ProductCard } from "./product-card-gear"

import styled from 'styled-components'

const CustomBox = styled.div`
.gearbox{display:flex; flex-direction:row; gap:2rem;}
@media (max-width: 48rem) {
  .gearbox{display:flex; flex-direction:column !important;}
  }
@media (min-width: 58rem) {

	}


`


// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products }) {
  
  return (
    

    <CustomBox>
    <div className="gearbox" style={{ justifyContent:'center',}}>
      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
    </div>
    </CustomBox>
    
  )
  
}
