import React from 'react';

function NewRewards() {
  return ( 
    <section className="new-rewards_wrap">
      <div className="new-rewards_inner">
        <div className="new-rewards_logo">
          <img src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png" alt="Starbucks Rewards" /> 
        </div>
        <div className="new-rewards_conts">
          <div className="info-cont">
            <div className="info-cont_txt">
              <h2>
                스타벅스만의 특별한 혜택, <br className="mobile-br" /> <br className="pc-br" /><strong>스타벅스 리워드</strong>
              </h2>
              <p>
                <strong>스타벅스 회원이세요?</strong> <br className="mobile-br" /> 로그인을 통해 <br className="pc-br" />나만의 리워드를 확인해보세요.
                <br/>
                <strong>스타벅스 회원이 아니세요?</strong> <br className="mobile-br" /> <br className="pc-br" />가입을 통해 리워드 혜택을 즐기세요.
              </p>
            </div>
            <div className="btn-signin_group">
              <a href="/mem/join.do" className="btn-signin_join">회원가입</a>
              <a href="#" className="btn-signin_login">로그인</a>
            </div>
          </div>
          
          <div className="gift-cont">
            <div className="gift-cont_txt">
              <p>
                회원 가입 후, 스타벅스 e-Gift Card를 <br className="pc-br"/><br className="mobile-br"/><strong>"나에게 선물하기"로 구매하시고, <br className="mobile-br"/>편리하게 등록하세요!</strong>
                <br/>
                카드를 등록하여 스타벅스 리워드 회원이 되신 후, <br className="pc-br"/><br className="mobile-br"/>첫 구매를 하시면 무료 음료쿠폰을 드립니다!
              </p>
            </div>
            <div className="btn_egift">
              <a href="/msr/sceGift/gift_step1.do">e-Gift Card 선물하기</a>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default NewRewards;