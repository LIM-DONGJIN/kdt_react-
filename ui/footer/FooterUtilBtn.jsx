import React from 'react';

function FooterUtilBtn() {
  return ( 
    <div className="footer_util_btn">
					<ul>
						<li><a href="/">HOME</a></li>
						<li>
							<a href="javascript:$.loginLib.showLayerLogin();" className="sign_in">Sign In</a>
							<a href="javascript:$.loginLib.logout();" className="sign_out">Sign Out</a>
						</li>
						<li className="last"><a href="/mem/join1.do">Join Us</a></li>
					</ul>
				</div>
   );
}

export default FooterUtilBtn;