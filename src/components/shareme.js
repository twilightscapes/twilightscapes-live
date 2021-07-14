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

<a className="social-link social-facebook fa fa-facebook" href="http://www.facebook.com/sharer.php?u='{url}'&amp;t=" title="Share on Facebook." onclick="javascript:window.open(this.href,
  '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"> facebook</a>

  );
};

export default Foo



