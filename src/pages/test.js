import * as React from "react"
import { Layout } from "../components/layout"
import Trumpy from "../icons/trump-family-board.svg"
import GoBack from "../components/goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"











export default function testPage() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`NFT Collectible Photography`}
          description={`Twilightscapes NFTs - NFT Art photography for collectors`}
          image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'}
        />

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}

{/* <div style={{maxHeight:'80vh', overflow:'hidden'}}> */}

{/* aajsgasfgaslfj  aslfhaslfhasf lkashflk ashfasfasasfasfiph    sfhasf  */}
 
{/* <StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="featured-imaged" /> */}


<Trumpy />

 {/* </div> */}


{/*
      <div className="container" style={{padding: '2rem 10%'}}>
      <GoBack />
       </div>
 */}
    
    
    </Layout>

  )
}
