import * as React from "react"
import { ShareSocial } from 'react-share-social' 
import styled from "styled-components"

const CustomBox = styled.div`

copyContainer: {
  position: relative;
  padding: 14px;
  border: 1px solid grey;
  color: #263238;
  fontFamily: inherit !important;
  background: #ff0000; 
}

.makeStyles-copyContainer-5 {
  width: 100%;
  cursor: text;
  display: inline-flex;
  position: relative;
  background: transparent !important;
  font-family: inherit  !important;
  letter-spacing: -0.05px;
  border:1px solid #999 !important;
  box-shadow:  0px 0px 7px #aaa !important;
  outline-style: dotted;
  outline-width: 0px;
  border-radius: 12px;
  padding:3px 20px;
  font-size:100% !important;
  filter: drop-shadow(0px 0px 7px rgba(0,0,0,.4));
  background: rgba(0,0,0,0.03) !important;
  }

.makeStyles-copyContainer-5:before {
    content: 'please share this web address:';
    font-size: 100%;
    position:absolute;
    left:0;
    text-align: center;
    top:-24px;
    width:100%;
    color:  var(--primary) !important;
  }

.makeStyles-iconContainer-3 {
    text-align: left;
    padding-top: 20px;
    padding-bottom: 25px;
    margin-bottom: 20px;
    display: flex !important;
    justify-content:center;
    align-items: center;
    align-self: center;
    }

.makeStyles-iconContainer-3 button {
      flex: inherit !important;
      border: none;
      margin: 5px;
      text-align: center;
      }

.makeStyles-copyIcon-7 {
    color:  var(--primary) !important;
    right: 0px;
    width: auto;
    position: absolute;
    font-weight: bold;
    }

   .makeStyles-copyUrl-6 {
      color:  var(--primary) !important;
      font-size: 16px;
      font-weight: bold;
      max-width: calc(100% - 55px);
      overflow-x: auto;
      white-space: nowrap;
      }

`

const style = {
  background: 'transparent',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  display:'block',
  margin:'0 auto',

};

const Foo = () => {
  
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
<CustomBox style={{}}>
    <ShareSocial
    style={style}
    url ={url}
    // title="Sharing IS Caring!"
    socialTypes={['facebook','twitter','reddit','linkedin']}>

      </ShareSocial>
    </CustomBox>


  );
};

export default Foo



