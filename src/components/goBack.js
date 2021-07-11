
import * as React from "react"
import styled from "styled-components";
import { Link } from 'gatsby'
import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";
import { Location } from '@reach/router'
const CustomBox = styled.div`

.themed{margin-top:20px;}
=

`

   
const GoBack = () => (

<CustomBox style={{}}>


<div style={{display:'flex', justifyContent:'center', color:'#ccc'}}><button className="back" onClick={() => { navigate(-1) }} style={{display:'flex', justifyContent:'center'}}><span className="icon -left" style={{paddingRight:'1rem'}}><BiLeftArrow /></span> {" "}Go Back</button></div>


</CustomBox>
  
)

export default GoBack