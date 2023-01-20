import React from 'react';
import MobGnb from '../ui/header/MobGnb';
import TabletGnb from '../ui/header/TabletGnb';
import TopMsr from '../ui/header/TopMsr';
import TopWrap from '../ui/header/TopWrap';

function Header() {
  return ( 
    <>
     <TopMsr /> 
     <TabletGnb />
     <MobGnb />
     <TopWrap />
    </>
  );
}

export default Header;