import React from 'react';

function TopMenuLi({item}) {

  const [isLogin, setIsLogin] = React.useState(true);

  return ( 
    <>
      {
        isLogin && item.id === 1 ? "" : (<li key={item.id} className="util_nav01"><a href={item.link}>{item.name}</a></li>) 
      }
    </>
  );
}

export default TopMenuLi;