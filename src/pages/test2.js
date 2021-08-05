import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import CasePanels from "../components/casepanels"
import WormHole from "../../static/assets/ORBIES.svg"









export default function testPage() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />



{/* <CasePanels /> */}

<div className="vidbox" style={{maxHeight:'90vh', overflow:'hidden'}}>

<div style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'1', backgroundSize:'cover'}}><StaticImage src="../img/Wormhole.png" alt="Twilightscapes" className="layer1" /></div>

<WormHole style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'1', backgroundSize:'cover'}} />

<div className="video-background" style={{width:'100vw'}}>
  
  

  <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>
    
      <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/AmrrSfiMxGA?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=AmrrSfiMxGA" frameBorder="0" allowFullScreen playsinline></iframe>
    </div>
  
</div>
</div>

{/* NfEdtor4cis */}





      <div className="container" style={{padding: '2rem 10%'}}>
   




       </div>

    
    
    </Layout>

  )
}
