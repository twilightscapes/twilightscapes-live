
import * as React from "react"
import styled from "styled-components"

import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

const CustomBox = styled.div`

.themed{margin-top:20px;}
=

`

   
const GoBack = () => (
<CustomBox style={{}}>





<div style={{display:'flex', justifyContent:'center', color:'#ccc'}}><button className="back button" onClick={() => { navigate(-1) }} style={{display:'flex', justifyContent:'center'}}><span className="icon -left" style={{paddingRight:'1rem'}}><BiLeftArrow /></span> {" "}Go Back</button></div>




</CustomBox>
  
)

export default GoBack