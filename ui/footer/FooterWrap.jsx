import React from 'react';
import FooterMenu from './FooterMenu';
import footerMenuDatas from '../../../datas/footerMenuDatas';

function FooterWrap() {

	console.log(footerMenuDatas);

  return ( 

    <div className="footer_wrap ">
			<div className="footer_menus">
				{
					footerMenuDatas.map(item => (
						<FooterMenu 
							key={item.id}
							item={item}
						/>
					))
				}
			</div>
		</div>
   );
}

export default FooterWrap;