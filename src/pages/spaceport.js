import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"
import LaunchPad from "../components/launchpad"
import ScrollAnimation from 'react-animate-on-scroll'
import SpacePort from "../../static/assets/spaceport.svg"







export default function SpaceportPage() {
   return (


    
    <Layout className="thanks-page">

<Helmet>
  <body className="featurepage" />
</Helmet>

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />


<ScrollAnimation className="signup" animateIn="bounceInUp" delay={6950} initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'10vw', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>


<LaunchPad />
</ScrollAnimation>

<SpacePort />
      <div className="container" style={{padding: '2rem 10%'}}>
   




       </div>

    
    
    </Layout>

  )
}
