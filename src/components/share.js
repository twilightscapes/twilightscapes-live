import * as React from "react"
import { ShareSocial } from 'react-share-social' 





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

    <ShareSocial
    style={style}
    url ={url}
    // title="Sharing IS Caring!"
    socialTypes={['facebook','twitter','reddit','linkedin']} />
  );
};

export default Foo



