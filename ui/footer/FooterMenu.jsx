import React from 'react';

function FooterMenu({item}) {

  console.log(item);

  return ( 
    <ul>
      <li className="footer_menu_ttl"><a className="en" href={item.link}>{item.name}<span className="footer_arrow_down"></span></a></li>
      {
        item.subMenu.map( subItem => (
          <li key={subItem.id}><a href={subItem.link}>{subItem.name}</a></li>
        ))
      }
    </ul>
  );
}

export default FooterMenu;