import React from 'react';

function TopMsr() {
  return ( 
    <div id="top_MSR" >
				<div className="top_msr_wrap" style={{display:"block"}}>
					<div className="user_greet">
						<div className="user_pic_area">
							<img alt="사용자 아이디" src="//image.istarbucks.co.kr/common/img/common/user_pic_sample.jpg" />
							<p className="msr_user_mask msr_user_mask01"></p>
							<p className="msr_user_mask msr_user_mask02"></p>
							<p className="msr_user_mask msr_user_mask03"></p>
							<p className="msr_user_mask msr_user_mask04"></p>
						</div>
						<p className="user_greet_txt"><strong></strong>님, 안녕하세요!</p>
						<p className="msr_btn_setting"><a href="/my/myinfo_modify_login.do">개인정보 수정</a></p>
					</div>
				
					<span className="msr_sep_line"></span>

					<div className="user_level" style={{display:"block"}}>
						<a href="/my/reward.do">
							<p className="level_star_bg en">0</p>
							<p className="user_level_txt"> <strong className="t_ac8432 en userGrade">Gold Level</strong><br /><strong>무료음료</strong> 획득 별까지<br/><strong className="necessaryStar">0개</strong> 남았습니다. </p>
						</a>
					</div>
					
					<div className="msr_lead">
						<a href="/msr/msreward/level_benefit.do">
							<p className="icon_msr_cup"></p>
							<p className="msr_lead_txt"><strong>스타벅스 리워드</strong><br/>혜택에 편리함까지 더한<br/>스타벅스 리워드를<br/>즐겨보세요.</p> 
						</a>
					</div>

					<span className="msr_sep_line"></span>
				
					<div className="msr_card_info w_card_pic">
						<p className="msr_card_area" style={{cursor:"pointer"}}><img alt="" /></p>
						<p className="card_info_txt">잔액 <strong className="en balance">0</strong>원</p>
						<p className="btn_other_more"><a href="/my/mycard_index.do">다른 카드 보기</a></p>
					</div>
					<div className="msr_card_zone m_card_pic">
						<div className="mycard_area1">
							<img alt="카드이름" />
						</div>
						<div className="mycard_area2">
							<img alt="카드이름" src="//image.istarbucks.co.kr/common/img/common/mycard2.png" />
							<p className="num"></p>
							<p className="barcord"><img src="//image.istarbucks.co.kr/common/img/common/bacord.png" alt="" /></p>
						</div>
						<div className="mycard_one">
							<div className="front">
							<img src="//image.istarbucks.co.kr/common/img/common/payment_icon1.png" alt="" />
							  </div>
							<div className="back"><img src="//image.istarbucks.co.kr/common/img/common/payment_icon1.png" alt="" /></div> 
						</div>
						<p className="mycard_money_result">잔액 <span className="en balance"> 550,000 </span>원</p>
					
						<p className="btn_other_more"><a href="/my/mycard_index.do">다른 카드 보기</a></p>
					</div>
				
					<div className="sb_card_regi">
						<a href="#">
							<p className="icon_add_card"><img alt="카드등록 아이콘" src="//image.istarbucks.co.kr/common/img/common/icon_add_card.png" /></p>
							<p className="sb_card_regi_txt"><strong>스타벅스 카드 등록</strong><br/>카드를 등록하시고<br/>다양한 리워드를<br/>만나보세요.</p>
						</a>
					</div>

					<span className="msr_sep_line"></span>
					<div className="notice_icons">
						<div className="notice_icon2">
							<a href="/my/calendar.do">
								<p></p>
								<span>캘린더</span>
							</a>
						</div>
						<div className="notice_icon3">
							<a href="/my/ecoupon.do">
								<p>
									<span className="validCoupontCnt">0</span>
								</p>
								<span>e-쿠폰</span>	
							</a>
						</div>
						
						<div className="notice_icon4">
							<a href="/eFreq/status.do?TYPE=BARCODE">
								<p></p>
								<span>e-프리퀀시<br/>바코드</span>
							</a>
						</div>
						
					</div>
				</div>

				<div className="top_msr_nologin">
					<div className="top_msr_nologin_l">
						<i className="icon_before_login"></i>
						<p className="top_msr_mem_yet"><strong>스타벅스커피 코리아 회원이 아니세요?</strong><br/>스타벅스커피 코리아 회원만의<br/>특별한 혜택을 누릴 수 있습니다.</p>
						<div className="msr_nologin_btns">
							<ul>
								<li><a href="javascript:$.loginLib.showLayerLogin();">로그인</a></li>
								<li><a href="/mem/join.do">회원가입</a></li>
							</ul>
						</div>
					</div>
					<span className="msr_sep_line"></span>
					<div className="top_msr_nologin_r">
						<i className="icon_sbcard_lead"></i>
						<p className="sbcard_lead_txt"><strong>스타벅스 카드를 가지고 계신가요?</strong><br/>스타벅스 카드를 등록하시면, 스타벅스 리워드 만의<br/>특별한 혜택을 누릴 수 있습니다.</p>
						<p className="btn_sbcard_regi">
							<a href="/my/mycard_info_input.do">카드 등록</a>
						</p>
					</div>
					<div className="top_msr_nologin_b">
						<p className="egift_lead_txt"><strong>스타벅스 카드가 없으신가요?</strong><br/>스타벅스 매장에서 구매하시거나,<br/>PC/모바일웹, 스타벅스 앱에서<br/>e-Gift를 “나에게 선물하기”로 구매 후,<br/>편리하게 등록하세요!<br/>스타벅스 리워드의 특별한 혜택! 생일 쿠폰을 드립니다!</p>
						<p className="btn_egift_regi">
							<a href="/msr/sceGift/gift_step1.do">e-Gift 선물하기</a>
						</p>
					</div>
				</div>
			</div>


  );
}

export default TopMsr;