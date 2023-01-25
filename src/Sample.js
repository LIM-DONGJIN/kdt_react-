import React from 'react';

function Sample(props) {

  const 카드사용 = () => {
    props.아빠카드("카드를 사용하셨습니다.")
  }
  
  return ( 
    <>
      <h2>딸 핸드폰: {props.카드명세}</h2>
      <button onClick={카드사용}>카드긁기</button>
    </>
  );
}

export default Sample;
