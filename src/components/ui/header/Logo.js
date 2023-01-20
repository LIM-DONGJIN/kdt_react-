import React from 'react';

function Logo({title, text}) {
  return ( 
    <h1 className="logo"><a href="/" title={title} >{text}</a></h1>
   );
}

export default Logo;