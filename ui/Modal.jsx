import React from 'react';

function Modal() {
  return ( 
    <div className="dtPop ecoPop" id="msrCheckPop">
    <div className="head">
      <p className="tt"></p>
      <p id="dtPopCommonCloseBtn" className="close dtPopClose"><a href="#"></a></p> 
    </div>  
    <div id="Msr" className="dtPopInner left">
      <p>[My DT Pass]는 스타벅스 카드를<br/>
      등록한 회원만 이용 가능한 서비스입니다.<br/>
      카드를 등록하시겠어요?
      </p>
      <br/>
      <input type="hidden" id="dtsPwdchk2" />
      <input type="hidden" id="dtsPwdchk" />
    </div>
    <div className="dtPopBtn">
      <a id="dtPopPwdCheckBtnMsr" className="dtPopBtn1 confirm pwdCheckBtn" >확인</a>
      <a id="dtPopCancelBtnMsr" className="dtPopBtn2 cancel">취소</a>
      <a id="dtPopCommonBtnMsr" className="dtPopBtn2 commonBtnMsr">확인</a>
    </div>
    
  </div>
   );
}

export default Modal;