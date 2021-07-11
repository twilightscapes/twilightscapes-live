import React from "react"


import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

// import Image from '../components/Image'
// import ScrollAnimation from 'react-animate-on-scroll'
// import { GiPlainArrow } from 'react-icons/gi'

import styled from 'styled-components'

const CustomBox = styled.div`

@media (max-width: 48em) {
	.image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	.image-wrap .news-btn{ margin-top:1rem;}
	.image-wrap .innerpanel{font-size:70% !important;}
}

@media (min-width: 58em) {
	.textbox{padding-top:80px !important;}
       .container{max-width:800px !important;}
}





`








const terms = () => (


 <CustomBox>
    
    <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Ghost Towns" />
    
    <section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem'}}>
      <h1>Terms of Service</h1>
    

<h3>1. Terms</h3>
By accessing this web site (toddlambert.com), you are agreeing to be bound by these<br />
web site Terms and Conditions of Use, all applicable laws and regulations,<br />
and agree that you are responsible for compliance with any applicable local<br />
laws. If you do not agree with any of these terms, you are prohibited from<br />
using or accessing this site. The materials contained in this web site are<br />
protected by applicable copyright and trade mark law.

<h3>2. Use License</h3>

Permission is granted to temporarily download one copy of the materials<br />
(information or software) on Todd Lambert’s web site for personal,<br />
non-commercial transitory viewing only. This is the grant of a license,<br />
not a transfer of title, and under this license you may not:

<ol>
<li>modify or copy the materials;</li>
<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
<li>attempt to decompile or reverse engineer any software contained on yearofnight.com;</li>
<li>remove any copyright or other proprietary notations from the materials; or</li>
<li>transfer the materials to another person or “mirror” the materials on any other server.</li>
</ol>

<p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Todd Lambert at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>



    </div>
    </section>
    
    </Layout>
     </CustomBox>
)

export default terms
