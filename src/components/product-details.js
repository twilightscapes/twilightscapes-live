
import * as React from "react"
import styled from "styled-components";
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

const ProductDetails = () => (

<CustomBox style={{}}>


<Tabs className="infomenu" ß style={{minHeight:'20vh', width:'100%', maxWidth:'1000px',   overflow:'hidden', marginTop:'40px',}}>
        <h2 style={{fontSize:'140%', textAlign:'center', margin:'1rem 0'}}>Photo Details</h2>
    <TabList style={{width:'100%', border:'0px solid yellow',}}>
    <Tab><div className="iconmenu"><CgRatio /><span>Specs</span></div></Tab>
    <Tab><div className="iconmenu"><RiSecurePaymentLine/><span>Secure</span></div></Tab>
    <Tab><div className="iconmenu"><HiOutlineScale/><span>Legal</span></div></Tab>
      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}
      <Tab><div className="iconmenu"><CgInfo /><span>FAQ</span></div></Tab>
      
      
    </TabList>
 

   <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
           <strong style={{fontSize:'1.5rem'}}>Specs</strong><br /><br />
           <p>
           Edited and production output to Tiff file format<br /> <br />
           Typical file size 30-50MB<br /> <br />
           Average dimensions range from 4988×3325 to 5481x3653 or greater<br /> <br />
           All Twilightscapes are shot using the latest state-of-the-art equipment and lenses.
           <br /><br />Canon 5D series, Sony A7R series and Sony A7S series.
           </p>
           
    </TabPanel>



    <TabPanel style={{padding:'0 1.5rem', width:'100%',}}>
            <strong style={{fontSize:'1.5rem'}}>Secure and spam free</strong><br /><br />
            <p>All transactions are secured using the latest 128-bit SSL encryption. <br />
            <br />
            Full PCI Compliance - Payment Card Industry Data Security Standard (PCI DSS)<br /> <br />
            I value your privacy and will always put your security first on all accounts. <br /> <br />
            </p>

    </TabPanel>


    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
    <strong style={{fontSize:'1.5rem'}}>Legal</strong><br /><br />


<h4>There are two licensing options:</h4>
<ol style={{margin:'1rem 3rem'}}>
<li style={{}}>Personal Use License which includes printing rights. All use and restrictions are limited to private use only.</li>
<br />
<li style={{}}>Unlimited Royalty-Free License which includes all rights of the personal use plus commercial use.</li>
</ol>

<p style={{fontSize:'1.2rem', textAlign:'center', fontWeight:'bold'}}>That’s it.</p> 

<blockquote className="frontquote" style={{width:'70%', margin:'0 auto'}}>
<p>I believe art should be for everyone, not just snobby elite art collectors. It should be available to and priced for everyone. I just hope you enjoy the art.</p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd
</div></blockquote>

           {/* <p>
           Twilightscapes offers two types of license models: royalty-free ("RF") and rights-managed ("RM").</p>

           <p>
            Royalty-free means that the license fee is paid once and there is no need to pay additional royalties if the content is re-used. <br />Royalty-free content is licensed for worldwide, unlimited and perpetual use.</p>

            <p>Rights-managed content is allowed to be printed in any format suited for private display. Rights-managed content cannot be distributed or used in public in any way that compromises Todd Lambert's abilities to resell the content.<br /><br />
Rights-managed content is licensed for specific types of private use, and limits the use of the content to private use and display only.</p> */}

            <p style={{textAlign:'center', fontSize:'130%', margin:'2rem 0',}}>
              <Link to="/legal/" style={{color:'inherit'}}>View License Agreement</Link>
            
   
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

export default ProductDetails