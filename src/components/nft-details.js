
import * as React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { CgInfo, CgRatio  } from "react-icons/cg"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

import { RiSecurePaymentLine } from "react-icons/ri"
import { HiOutlineScale } from "react-icons/hi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const CustomBox = styled.div`

.infomenu{

   border-radius:12px;
   filter: drop-shadow(0px 0px 10px rgba(155,155,155,.5)); 
   background:rgba(0,0,0,0.08) !important;
}

`

const NFTDetails = () => (

<CustomBox style={{}}>


<Tabs className="infomenu" ß style={{minHeight:'20vh', width:'100%', maxWidth:'',   overflow:'hidden', marginTop:'40px',}}>
        <h2 style={{fontSize:'140%', textAlign:'center', margin:'1rem 0'}}>How VidSocks Work</h2>
    <TabList style={{width:'100%', border:'0px solid yellow',}}>
    <Tab><div className="iconmenu"><CgRatio /><span>Specs</span></div></Tab>
    <Tab><div className="iconmenu"><RiSecurePaymentLine/><span>Secure</span></div></Tab>
    <Tab><div className="iconmenu"><HiOutlineScale/><span>Standards</span></div></Tab>
      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}
      <Tab><div className="iconmenu"><CgInfo /><span>FAQ</span></div></Tab>
      
      
    </TabList>
 

   <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
           <strong style={{fontSize:'1.5rem'}}>VidSocks are the World's <strong>FIRST and ONLY</strong>, 100% dynamically user generated Art!</strong><br /><br />
           <p>
           Each VidSock is uniquely created by the artist and then delivered to the world for the art to be altered and changed by its viewers thus making each VidSock truly dynamic.<br /> <br />
           Depending on the Artist's vision, they can choose to modify your NFT long after it has been minted and delivered to you. The artist has the flexibility to alter, make adjustments, add new items, or even completely change your individual art. Only your VidSock will have these totally unique modifications. Plus, each VidSock can be changed on a weekly basis or on special dates or occasions or even years later! It's up to the Artist and their vision for their VidSock.<br /> <br />
           Of course, you as the owner of the VidSock, always have the option to view both the new and the original versions at any time.<br /> <br />

           </p>
           
    </TabPanel>



    <TabPanel style={{padding:'0 1.5rem', width:'100%',}}>
            <strong style={{fontSize:'1.5rem'}}>Individual VidSocks are just the beginning of the fun.</strong><br /><br />
            <p>With each winning bid, you not only get to take home your new VidSock, but you will also get a full 90 days of complete access to our new VidSock Video Blog Platform™ (a $120 value - and currently invite only). The very same platform you're visiting right now, You will have your own VidSock Platform allowing you to easily create dynamic VidSocks of your own and share or sell them to the world.
            <br />
            <br />
             If you can blog, you can make stunning video and animated artwork based blogs. Then start selling them and prepare to take over the world! <br />
            <br />
            So, do you want to know more about the new VidSock Platform? Well, click the next tab and find out why the VidSock platform is right for you.<br /> <br />
            </p>

    </TabPanel>


    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
    <strong style={{fontSize:'1.5rem'}}>Built Right In All The Right Spots</strong><br /><br />


    <strong style={{fontSize:'1.3rem'}}>The VidSock Platform was built for the specific needs of photographers and other creative artists because it was built by one.</strong>
<ol style={{margin:'1rem 3rem'}}>
<li style={{}}>A complete system including video blog with unlimited posts, and customizable home page, about and contact pages with integrated contact form.</li>
<br />
<li style={{}}>Built right in the right places. The site is built from the ground up to utelize modern technologies and yet do so in the correct way and one that Google likes. </li>
<br />
<li style={{}}>Top Scores out of the box - Accessibility, SEO, Best Practices, oh.. and its a full-blown Web App too!</li>
<br />
<li style={{}}>Automated backups with intant rollbacks to any version. Site is automatically load-balanced and served from a Global Edge Network so your site is lightning fast no matter where your visitors come from.</li>
<br />
<li style={{}}>Want just the stats? ok:<br />
100GB/Month Bandwidth<br />
100 Site Form submission per Month<br />
Custom Domain names available
</li>
<br />
<li style={{}}>Need more? The VidSock Platform also has complete E-Commerce integration with Shopify. Not only will you be able to sell your products right from your blog pages, but we utelize Shopify's Developer API which means it only costs $9 a month to run a full featured store. This saves you almost $20 off their normal base $28 monthly fee.</li>

<li style={{}}>Seo? Social? It's in the bag. Our entire content management system(CMS) behind out plaltform is designed to make producing top-notch SEO-minded content that ranks incredibly well in Google page rankings. Also, every page and every post has custom graphics for default social image previews and custom page titles and descriptions on social media sites. Our sites kick butt. Don't believe us? Check out how we do with <a href="https://pagespeed.google.com" target="_blank" noreferrer nofollow>Google Page Speed</a>.</li> 
</ol>



<blockquote className="frontquote" style={{width:'70%', margin:'2rem auto'}}>
<p>Beyond just the best industry-leading performance and visibility, each VidSock Platform has tons of great built-in features such as image zooming, tab panels, custom color options for both light and dark themes. The sites are also user installable PWA (Progressive Web Apps) which means your site can be installed on any device without any need for expensive and complex App Stores.  </p>

<div style={{textAlign:'right', marginRight:'20%', marginTop:'20px'}}> – Todd
</div></blockquote>


            <p style={{textAlign:'center', fontSize:'130%', margin:'2rem 0',}}>
              {/* <Link to="/legal/" style={{color:'inherit'}}>View License Agreement</Link> */}
            
   
           <br />

            </p>



           
    </TabPanel>




    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
          <strong>Technology</strong><br /><br />
          <p>
          Twilightscapes were shot using: <br /><br />
          Canon 5D series<br /><br />
          Sony A7S series<br /><br />
          Sony A7R series <br /><br />
          </p>
    </TabPanel> */}



    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
            <strong style={{fontSize:'1.5rem'}}>FAQ</strong><br /><br />

            <p style={{fontWeight:'bold', marginBottom:'0'}}>So, what do I get?</p>
            <p style={{}}>Upon completion of your purchase, you will receive a ZIP file that contains the original high-resolution image in TIFF format. </p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What CAN I do with these images?</p>
            <p style={{}}>Almost anything that you want. Print it for your house or office. Use it as a background or desktop for your phone, computer or TV. Make your holiday cards with it. Print it on your favorite coffee mug. You name it!</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What CAN’T I do with these images?</p>
            <p style={{}}>Basically, don’t be a Dick or a Karen. I am providing high-quality images that cost considerable amounts of both time and money to acquire. I offer these for a low price to encourage people to enjoy my art. <strong>Please don't share the images on the Internet.</strong></p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Do I get the file right away?</p>
            <p style={{}}>Yes, upon completion of transaction</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What if I lose the file, can I get another copy?</p>
            <p style={{}}>Yes, you can retrieve the original file at any time. You will be sent an email with a link to retrieve.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>What about prints?</p>
            <p style={{}}>I do offer exclusive hand-crafted prints for special circumstances - contact me with your needs if you’re interested. Otherwise, I provide two links to the best printer options available on the upper right-side of the photo pages. The links are affiliate links which provide me a portion of any sales, so I encourage you to print with these services.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>NFTs and image exclusivity</p>
            <p style={{}}>If you wish to buy all rights to an image (exclusivity), all of my images are available for purchase in a non-fungible token version with the transfer of all ownership and the original RAW file included. The image will also be removed from further sales and retired.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Is there a watermark?</p>
            <p style={{}}>No, it is removed on delivery</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I print this for my office?</p>
            <p style={{}}>Yes.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I print multiple copies?</p>
            <p style={{}}>Yes, if they are for your private use and enjoyment. No, if you want to print them for sale, or for something that relates to being sold or given away.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Can I post it on Facebook or any where online?</p>
            <p style={{}}>Simply answered, No. These images are for your private use and enjoyment only. I make my living on selling these images, so if you provide that to others, it then hurts my ability to further sell those images.</p>

            <p style={{fontWeight:'bold', marginBottom:'0'}}>Do I own this photo, copyright or can I claim it as mine?</p>
            <p style={{}}>No, the intellectual rights and copyrights are not transferred in any way and will remain the property of Todd Lambert.</p>

            

            

            {/* <p style={{fontWeight:'bold'}}></p>
            <p style={{}}></p> */}




    </TabPanel>


   

  </Tabs>


</CustomBox>
  
)

export default NFTDetails