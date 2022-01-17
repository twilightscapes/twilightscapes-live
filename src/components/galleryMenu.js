import * as React from "react"
// import { Layout } from "../components/layout"
import GoBack from "./goBack"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "./seo"
import CasePanels from "./casepanels"
import { SRLWrapper } from "simple-react-lightbox"
import styled from "styled-components"
const CustomBox = styled.div`
.horizontal-scroll-wrapper {
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  // width: calc(100px + 1px);
  max-width:;
  height: 100vw;
  margin: 0;
  padding-top: 1px;
  // background: #abc;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-0px);
  transform-origin: right top;
}
.horizontal-scroll-wrapper > div {
  display: block;
  padding: 5px;
  // background: #cab;
  transform: rotate(90deg);
  transform-origin: right top;
  border:0px solid red;
}

.button1{
  width:100px;
  cursor:pointer;
fontSize:100%;
color:#fff !important;
background:#000;
padding:1px 30px;

}

.squares > * {

}




.squares {
  padding: 0 0 0 0;
}
.squares > div {
  width: auto;
  height: auto;
  text-align:center;
  margin: 0 0 50% 0;
}

.squares > div:first{
  border:1px solid red !important;
  margin: 0 0 20% 0 !important
}

`
export default function testPage() {
   return (
    <CustomBox>
<div className="sliderholder1" style={{height:'75px', overflow:'hidden', width:'', margin:'0 auto 0 auto', padding:'1rem 0', objectFit:'contain', position:'relative', display:'flex', placeContent:'', justifyContent:'', flexDirection:'', border:'0px solid black', borderRadius:'12px', position:'relative', top:'-5px', background:'', borderTop:'0px'}}>
{/* 
  <div style={{textAlign:'center', position:'absolute', bottom:'0', width:'100%'}}>Scroll to browse galleries --&gt;</div> */}

<div className="horizontal-scroll-wrapper squares" style={{display:''}}>

<div style={{width:'1000px', height:'100px', display:'inline-block', border:'0px solid blue', padding:'0 0 0 0', marginTop:'0'}}></div>

  <div><Link className="button1" to="/photos/milky-way">
  Milky Way
</Link></div>

<div><Link className="button1" to="/photos/ghosttowns">
  Ghost Towns
</Link></div>


<div><Link className="button1" to="/photos/cars">
  Relics of Rust
</Link></div>

<div><Link className="button1" to="/photos/crazygeology"
>
  Crazy Geology
</Link></div>


<div><Link className="button1" to="/photos/dendroiddreams">
  Dendroid Dreams
</Link></div>

<div><Link className="button1" to="/photos/gasstations">
  Gas Stations
</Link></div>

<div><Link className="button1" to="/photos/daylight">
  Daylight
</Link></div>


</div>
</div>
















{/* <CasePanels /> */}

      {/* <div className="zoombox">
      <SRLWrapper options={options} className="">

   <StaticImage
          src="../../static/assets/homepage.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12', margin:'2rem 4%'}}
        />

<div className="masonry" style={{}}>

<StaticImage
          src="../../static/assets/Experiences-Header-2.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-6.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-3.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../static/assets/Experiences-Header-4.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../static/assets/Experiences-Header-5.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
</div>
</SRLWrapper>
  </div> */}

    
    {/* <div className="spacer66"></div> */}


    {/* <div className="zoombox1">
      <SRLWrapper options={options} className="">

   <StaticImage
          src="../../src/img/DendroidDreams/sea-of-sorrow.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12', margin:'1rem 4%'}}
        />

<div className="masonry" style={{}}>

<StaticImage
          src="../../src/img/DendroidDreams/dances-with-the-moon.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/big-dreams.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/amber-oak.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/deciduous-doiley.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/evening-crown.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/gnarled-barkley.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/lonely-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/moaning-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/silver-serenity.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-tops.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-with-a-view.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/waimeia-milkyway.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/wishing-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

</div>
</SRLWrapper>
  </div> */}
    
    {/* </Layout> */}
    </CustomBox>
  )
}
