import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import CasePanels from "../components/casepanels"










export default function testPage() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />



<CasePanels />

      <div className="container" style={{padding: '2rem 10%'}}>
   




       </div>

    
    
    </Layout>

  )
}
