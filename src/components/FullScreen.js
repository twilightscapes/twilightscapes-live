
import * as React from "react"
import styled from "styled-components"

import { BsArrowsFullscreen } from "react-icons/bs"
import { navigate } from "gatsby";

const CustomBox = styled.div`

.themed{margin-top:20px;}
=

`


function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

   
const FullScreen = () => (
<CustomBox style={{}}>





<button title="Go Full-Screen" className="fullscreenButt" onClick={toggleFullScreen} style={{}}><span className="" style={{paddingRight:'1rem'}}><BsArrowsFullscreen /></span> {" "}</button>




</CustomBox>
  
)

export default FullScreen