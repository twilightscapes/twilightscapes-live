import * as React from "react"
import ReactShareSocial from 'react-share-social' 
import { useLocation } from "@reach/router"

const location = useLocation()

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};
export default function RSSUsage() {
  return <ReactShareSocial 
     style={style}
     url ={location}
     socialTypes={['facebook','twitter','reddit','linkedin']}
   />
}