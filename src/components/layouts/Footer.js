import React from 'react';
import CopyRight from '../ui/footer/CopyRight';
import FooterAwardWrap from '../ui/footer/FooterAwardsWrap';
import FooterUtilBtn from '../ui/footer/FooterUtilBtn';
import FooterWrap from '../ui/footer/FooterWrap';

function Footer() {
  return ( 
    <footer id="footer"> 
      <FooterWrap/>
      <FooterUtilBtn/>
      <FooterAwardWrap/>
      <div className="dt_pop_up_dimm"></div>
      <CopyRight />
    </footer>
  );
}

export default Footer;