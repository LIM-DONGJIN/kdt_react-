import React from 'react';

function FruitsPage({item}) {

  console.log(item.name, item.quantity, item.isView);
  return ( 
    <div>
      {
        item.isView ? 
          <>          
            <h2>과일이름 : {item.name}</h2>
            <h3>개수 : {item.quantity}</h3>
          </>
         : ""
      }
    </div>
  );
}

export default FruitsPage;