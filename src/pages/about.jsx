import * as React from "react"
// import { graphql } from "gatsby"
import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import { FaHandPointDown } from "react-icons/fa"
// import CommentBox from "../components/commentbox"


import { StaticImage } from "gatsby-plugin-image"
import ScrollAnimation from 'react-animate-on-scroll'


import styled from 'styled-components'

const CustomBox = styled.div`
.intro{height:100% !important;}

.intro:before{
	content: "About Todd Lambert";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}




// .speech:after {
// 	content: '';
// position: absolute;
// top: 30%;
// right: -48px;
// width: 0;
// height: 0;
// 	border: 60px solid transparent;
// 	border-left-color: inherit;
// 	border-right: 0;
// 	border-bottom: 0;
// 	 z-index:2;
// }

.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.circle{clip-path: circle(30vw at center); background-color:#222;}



p{line-height:150%;}


body.light .speech p span{color:#fff;}





@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}








`



// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `
// export default function nftPage({ data }) {
  export default function aboutPage1() {
  return (




<CustomBox>
    
    <Layout className="thanks-page">

    <Seo
          title={`About Todd Lambert`}
          description={`Todds story - about Todd Lambert`}
          image={'https://twilightscapes.com/promo-about-todd.jpg'}
        />

{/* <Seo title={`About Todd Lambert`} /> */}

<div className="vidbox" style={{position:'relative', maxHeight:'80vh'}}>



{/* <ScrollAnimation animateIn="bounceInDown" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={0} style={{position:'absolute', zIndex:'1', top:'100px',  fontSize:'10vw', color:'white', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>
      <div className="txtshadow-header letter zoomer">About
    </div>
</ScrollAnimation> */}




<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Todd Lambert" className="" width="100%" height="350" src="https://www.youtube.com/embed/X7H_0AqV2ew?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=X7H_0AqV2ew" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>




</div>

<br />
<br />

    <section className="about outer intro section " style={{paddingTop:'0', overflow:'hidden', marginTop:'1vh'}}>
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown" animateOnce={true} delay={1000}>
      <div className="" style={{display:'none',}}>
        <div className="columns">

              <h2 className="title has-text-weight-bold1">
                About Todd!
              </h2>
              
        </div>
      </div>
      </ScrollAnimation>
      
      
 <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', backgroundColor:'#222', width:'92%', margin:'0 auto', padding:'1rem', borderBottom:'4px solid #000', borderTop:'1px solid #000', boxShadow:'0px 0px 20px 0px #000', borderRadius:'20px', overflow:'',}}>

 
 <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', color:'#fff'}}>
<h2>Meet Todd</h2>
<p style={{position:'relative',}}>My name is Todd Lambert, and this is my story. It all began when the country was a different place, my parents were wanting to have a family, and I was born.

<ScrollAnimation animateIn="fadeIn" animateOnce={false} animatePreScroll={true} delay={1800}> 
<div className="txtshadow-header" style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(8deg)', textAlign:'center', fontSize:'450%', zIndex:'1',}}><div className="txtshadow-3d" style={{color:'#ff0000', transform:'rotate(-10deg)', fontWeight:'bold', textShadow:' 1px 8px 2px black',}}>NOPE!</div></div>
<div style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(-8deg)', textAlign:'center',}}> &nbsp;</div>
</ScrollAnimation> 
</p>

</div>

<ScrollAnimation animateIn="zoomInDown" animateOnce={false} animatePreScroll={true} delay={1800}> 
<div style={{margin:'1rem auto 0 auto', color:'#fff', width:'90%', textAlign:'center',}}>
<h3>OK, who wants to read that crap?</h3> Lets keep things fun, shall we?
</div></ScrollAnimation> 

</ScrollAnimation>

 <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{width:'40%', padding:'0',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>

       <StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd.jpg" />
<div style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}><span className="txtshadow" style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>
Todd Lambert on location</span></div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 
 
  {/* <ScrollAnimation animateIn="bounce" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={false} delay={0} style={{}}>
  
 <div className="spacer33 bounce txtshadow-header" style={{fontSize:'500%', color:'#fff', textAlign:'center', position:'relative',}}>
 
 <GiPlainArrow className="" style={{padding:'1rem', color:'#169dc6', borderRadius:'10px',}} />
 
 <span className="txtshadow-header" style={{position:'relative', top:'-25px', fontSize:'50%', fontWeight:'bold', color:'#fff', margin:'0 1rem 0 1rem',}}>SCROLL</span>
 
 <GiPlainArrow className="" style={{padding:'1rem', color:'#169dc6', borderRadius:'10px',}} />
 
 </div>
  </ScrollAnimation>   */}
 
 
 <div className="spacer33"></div>
 

  
  <div style={{padding:'1% 9%', fontSize:'120%', color:'#fff', textAlign:'center', backgroundColor:'#000', margin:'2em auto 0 auto', width:'80%', border:'1px solid',}}>
  <h5 className="txtshadow">The following content is rated:</h5> 
  <h4 className="txtshadow shadow-3d" style={{fontSize:'200%',}}>TV-MA</h4>
  <h6 className="txtshadow">This content may contain adult language , violence and mature themes not suitable for viewers under 18.</h6> 
  <h6 className="txtshadow">Viewer discretion is strongly advised.</h6> 
  </div>
  
 


 
 
 
 <div className="btp" style={{margin:'10% auto', width:'90%', border:'3px solid #fff', transform:'rotate(-3deg)', color:'#fff', backgroundColor:'#000', padding:'0 1rem',}}>
 <h3>In the style of reality TV:</h3>
 <StaticImage alt="Behind The Photos - VH1 " src="../img/behind-the-photos.png" />
 </div>

 
 
 
 
 
 
 

 
<ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={true} animatePreScroll={false}  style={{position:'relative', height:'50vh', margin:'50px 0',}}>
       <div className=" scene" style={{backgroundImage:'linear-gradient(#222 10%, #000 80%)', height:'100%', width:'100%', position:'absolute', display:'flex', justifyContent:'center', alignItems:'center',}}>
              <h2 style={{position:'absolute', fontSize:'200%', textAlign:'center', color:'#fff',}}>
             "Master of Night"<br />
             <span style={{fontSize:'16px',}}>(The story of Todd Lambert)</span>
              </h2>
       </div>
       </ScrollAnimation>
       
       
 
{/*  <div className="spacer33"></div> */} 
 
{/* Show Intro */}
 

 <div className="spacer33"></div>
 
 <div className="" style={{width:'80%', margin:'0 auto',}}>
 <h2 style={{textAlign:'center',  fontSize:'180%', margin:'2rem auto 0 auto', padding:'0',}}>[Narrator Voice]</h2>
 
 <p>Tonight, we look at Twilightscapes by Todd Lambert. Todd is best-known for his incredible night photography and unusual photo locations.</p>
 
 <h3 style={{textAlign:'center',}}>Now, Lets Go Behind The Photos</h3>
 
 <p>We begin in Southern Californa in  the early 80s, where Todd spent his childhood enjoying sports and grew up surfing, skateboarding and skiing.</p>
 </div>
 
 
 
  <div className="spacer33"></div>
 
 
 
 <div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={200} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd-young1.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Rockin the bowl cut!</div>
</div>
</ScrollAnimation>



 <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={500} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}><StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd-young2.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Future was so bright, needed shades</div>
</div>
</ScrollAnimation>

 </div>
 
 
 <div className="spacer33"></div>
 
 
 
  <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={false}  animatePreScroll={false}  style={{position:'relative', height:'50vh', margin:'50px 0',}}>
       <div className=" scene" style={{backgroundImage:'linear-gradient(#222 10%, #000 80%)', height:'100%', width:'100%', position:'absolute', display:'flex', justifyContent:'center', alignItems:'center',}}>
              <h2 style={{position:'absolute', fontSize:'200%', textAlign:'center', color:'#fff',}}>
             [Fast-Forwarding Childhood]</h2>
              

       </div>
       </ScrollAnimation>
       
       

 
 
 
  
  
  
  
      
              

<div className="spacer33"></div>




 <div className="split" style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%', order:'2',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 -10px', padding:'1rem 2rem',}}>
<h2 style={{textAlign:'center', fontSize:'130%', padding:'0',}}>[Narrator]</h2>

<p>It’s now many years later and Todd is fresh into the working world, after having busted his way out of high school with C- grades.</p>

 <p>Todd quickly followed that act with his encore performance of a drug and alcohol-induced loss of his first two years of college.</p>
 
<p>He often seemed to get along with both the people and obstacles in his life, by faking it better than most.</p> 
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'0 auto 0 auto', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0',}}><StaticImage alt="Todd Lambert hanging with friends" src="../img/todd-friends.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Hanging with friends</span>
</div>
</div>
</ScrollAnimation>

 </div>

       
       
       
      <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>The Dawn Of The Internet</h3>
<p>The Internet had just really started, but it became a fountain of knowledge at Todds fingertips.</p>

<p>Just as he’d been self-taught with most other things in his life, Todd immersed himself completely, trying to learn as much as he could about all aspects of...</p> 


<h2 style={{textAlign:'center', margin:'0 0 30px 0',}}> Website Design and Development</h2>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd-young-business.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Clean cut and baby-faced</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 
 <div className="spacer33"></div> 
 
 
 
 
 
 
<ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={false}  animatePreScroll={false}  style={{position:'relative', height:'50vh', margin:'100px 0',}}>
       <div className=" scene" style={{backgroundImage:'linear-gradient(#222 10%, #000 80%)', height:'100%', width:'100%', position:'absolute', display:'flex', justifyContent:'center', alignItems:'center',}}>
              <h2 style={{position:'absolute', fontSize:'200%', textAlign:'center', color:'#fff',}}>
             [The ride to the top]
             </h2>
       </div>
       </ScrollAnimation>
       


       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'45%', order:'2',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>
<h3>Todd becomes a new pioneer on the frontiers of the World Wide Web</h3>
<p>
Todd had worked hard and become one of the the once-vaunted “Webmasters” who controlled the Internet.</p>

<p>These Webmasters, were the ones that they made the critically-acclaimed movie “Hackers” about and starred Angelina Jolie. </p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'55%', padding:'0', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 1rem 0 0',}}><StaticImage alt="Hackers Movie Poster" src="../img/hackthis.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Biopic film of Todds life at this point</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
       
       
       
       {/*
       <div className="spacer33"></div>  
       

       
         <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

It was my hey-day of web development. I had Jeffrey Zeldman and Eric Meyer listed as friends on my Flickr (pro) account. Yup, that was me.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div> */}

       
       
       
       
       
       
       <div className="spacer33"></div>  
       
       
       
       
       
       
       
       <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'45%', order:'2',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>
<h3>The view was great!</h3>

<p>It was at this point that Todd was shining while he was sinking. He’d reached a great peak in his career, and he should have been basking in what that brought.</p>

<p>Todd finally had the large McMansion in the Burbs, new cars, happy dogs and a great career.</p>


</div>
</ScrollAnimation>


 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'55%', padding:'0', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 1rem 0 0',}}><StaticImage alt="Todds garage and cars" src="../img/todd-cars.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Got the McMansion and new cars</span>
</div>
</div>
</ScrollAnimation>

 </div>
       
       
       
       
       
       
       <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

I should have been on top of the world, yet I felt empty and felt as though I was just going through the motions.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad circle" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>
       
 
 
 
 
 
 
 <div className="spacer33"></div>  
       
       
        <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={false}  animatePreScroll={false} style={{position:'relative', height:'50vh', margin:'100px 0',}}>
       <div className=" scene" style={{backgroundImage:'linear-gradient(#222 10%, #000 80%)', height:'100%', width:'100%', position:'absolute', display:'flex', justifyContent:'center', alignItems:'center', opacity:'.9',}}>
              <h2 style={{position:'absolute', color:'#fff', fontSize:'300%', textAlign:'center',}}>
             [What goes up]
             <br />
             <span style={{color:'#fff', fontSize:'60%',}}>(Sometimes goes sideways)</span>
             </h2>
       </div>
       </ScrollAnimation>
       
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>Wobbles in Web Town</h3>
<p>But it all started to come crashing down for Todd. Eventually, his body succumbed from all of the years of excessive 1 and 0’s.</p>

<p>The "stay-up-all-night-party-like-a-rock-star" type of life he’d always dreamed of was in fact, <br /> <div className="txtshadow" style={{margin:'1rem 0', fontSize:'250%', textAlign:'center',}}>killing him.</div></p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd-grabs.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Life reachs out and grabs ya</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 

 
 
       
       
       <div className="spacer33"></div> 
       
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br /><br />
I once saw Todd eat an entire box of Krispie Kreme donuts and then he washed it down with at least 2 gallons of Mountain Dew.
<br /><br />And this was like, usually ever day...
</p>
<h5>- anonymous co-worker</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad circle" style={{border:'4px solid #fff', clipPath: 'circle(40vw at center)', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/coworker.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'25px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>co-worker</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 <div className="spacer33"></div>  
       
       
       
       
       
       
       
       <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'45%', order:'2',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>
<h3>Then it all came crashing down</h3>

<p>With all of this power and great responsibility comes great lethargy, gluttony and ultimately, Diabetes Type II, a heart condition, unknown gastric issues, horrible near-sightedness and of course all the debt and other normal stresses of life.</p>


</div>
</ScrollAnimation>


 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'55%', padding:'0', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 1rem 0 0',}}><StaticImage alt="Todds old beater car and a funny scene" src="../img/bluebox-crash.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Sometimes the moment just sort of finds you. Here, I found it.</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
<div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>The camera saves Todds life</h3>
<p>In his free time, Todd had begun playing around with photography as a hobby. </p>

<p>He became fascinated with all things photography and he sought out to learn everything there was to learn about it. </p>

<p>Todd finally reached a point where his photography, had become the driving force in his life. The wind beneath his sails, if you want to call it that.</p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Todd Lambert Web development for photographers" src="../img/todd-camera.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Todd tries to smile when the skies wont cooperate</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

I really only had free time during the evenings which is why I initially learned to photograph at night.
<br />
I just found that I really enjoyed the peacefulness and tranquility when I photographed alone at night.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad circle" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>

 
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>Drastic times - Drastic measures</h3>
<p>Todd proceeded to sell all of his earthly possessions. His house, cars, tvs, everything. He downsized his life to fit into an on-the-road lifestyle.</p>

<p> Todd shed most of his belongings and other stuff that had become shackles around him for so many years.
</p>

<p>The things he owned had in fact, owned him.</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Sell your soul" src="../img/mcmansion.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center',  width:'90%',  margin:'0 3%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Sell Your Soul</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 


 <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>A dangerous hobby</h3>
<p>Over the years, Todd had always been intrigued by being places where he wasn’t supposed to be.</p>

<p>It started as a kid, by sneaking out of his parents house every night and wandering the city streets, looking for the voices that called him out of his sleep.</p>

<p>Learning to accept darkness and find peace in the unknown was something that became second nature to Todd, even though he wasn’t aware of it at the time.</p>


</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Exploring the elevator shafts in an abandoned hotel" src="../img/todd-abandoned.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Exploring the elevator shafts in an abandoned hotel</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

There was actually several incidences of me pretending to be “sleep walking”... in order to help explain my unusual nocturnal activities to my parents.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad circle" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 

 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'65%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>A new destiny in the old</h3>
<p>In trying to find his lost soul inside these decrepit and crumbling vestiges of our American past, Todd had finally found something that actually tickled all his special spots.</p>

<p>He became obsessed with finding and photographing rusted cars, old ghost towns and remnants of America that had become long forgotten.</p>




</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'35%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Captive light from within" src="../img/new-in-old.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Preserving our past through photography</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

The history of our past, seemed to call to me. I was enamored by ghosts of places that I’d never been, yet they felt like home when I got there.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad circle" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'60%',}}>    
<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h3 style={{textAlign:'center', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>Wide horizons with wide smiles</h3>
<p>Todds mind has became much clearer and his views are endless and the world has become his back porch. He has no schedules, he has no agendas other than his own.</p>

<p>Living and working full-time on-the-road across the highways of America can be tough. </p>




</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><StaticImage alt="Todd on location at Mono Lake" src="../img/todd-horizons.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Todd on location at Mono Lake</span>
</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 <div className="spacer33"></div> 
 
 
 
 
 
 
 {/* <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className=" speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

Traveling across the country in search of a beauty that is elusive and fading, often makes for some wild circumstances.<br />
<br />I always find that the experiences are so worth it though.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><StaticImage alt="Co-worker talks about Todd Lambert" src="../img/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div> */}
 
 
 
 
 
       
       
       <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={false} delay={100} style={{position:'relative', height:'50vh',}}>
       <div className="" style={{backgroundImage:'linear-gradient(#222 10%, #000 80%)', height:'100%', width:'100%', position:'absolute', display:'flex', justifyContent:'center', alignItems:'center', opacity:'.9',}}>
              <h2 style={{position:'absolute', fontSize:'200%', color:'#fff',}}>
              [fade to black]
              </h2>
       </div>
       </ScrollAnimation>
       
       
       
       
       
       
       
       
       
       
       {/* <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto',}}>Wow! If you've made it this far, then that must mean that you are:</h3> <br /><br />

       <ul style={{display:'flex', flexDirection:'column', justifyContent:'space-between', fontSize:'150%', margin:'0 auto', width:'55%', listStyle:'none', listStyleType:'none', textAlign:'left', border:'1px solid', padding:'3rem', borderRadius:'12px', gap:'2rem' }}>

              <li>a) a stalker (great, as long as you're buyin! - HMU)</li>
   <li>b) a Russian bot (great, as long as you're buyin! - don't HMU)</li>

      <li>c) FBI (Sorry, new number, who dis?) </li>


       <li>d) my Mom (Love you Mom!)</li>

       </ul> */}

       <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', fontSize:'150%', margin:'0 auto', width:'75%', textAlign:'left'}}>
       <h2 style={{fontSize:'200%', fontWeight:'bold', textAlign:'center', margin:'3rem auto 1rem auto' }}>Wow, you made it...</h2>

       <blockquote style={{fontSize:'130%', border:'1 px dotted', padding:'1rem', borderRadius:'12px'}}>if you've come this far, maybe you're willing to come a little further. You remember the name of the town, don't you?</blockquote>

       <blockquote style={{fontSize:'130%', border:'1 px dotted', padding:'1rem', borderRadius:'12px'}}>I could use a good man to help me get my project on wheels. I'll keep an eye out for you and the chessboard ready.</blockquote>
</div>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>



<h3 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', margin:'2rem auto'}}>Todd's Other Work</h3>
 
 <div className="flexbutt noexit print" style={{padding:'0 4%',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>



{/* <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    </div> */}


    
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos" style={{borderRadius:'8px'}}  /></a>
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    </div>





<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/toddlambert-promo-banner.png" alt="Todd Lambert is an independent artist, creator, design, developer and generally a unicorn" style={{borderRadius:'8px'}}  /></a>
    <br />
    Todd Lambert excels in design, development, marketing, conceptual photography and online strategy that bring results. Learn more about Todd and maybe hire him to help you?
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>ToddLambert.com</a></div>
    </div>


    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  style={{borderRadius:'8px'}} /></a>
    <br />
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that costs nothing to run and get top ranks in Google!
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    </div>


</div>
       
   
    </section>

    {/* <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div> */}



    </Layout>
     </CustomBox>
    

  )
}