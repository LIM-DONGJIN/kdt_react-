import React from 'react';

function MobGnb() {
  return ( 
    <>
    <div className="mob_gnb_dimm"></div>
			<div className="mob_gnb_wrap">
				<div className="mob_gnb_wrap_inner">
					<aside className="btn_gnb_close"><a href="#" title="메뉴닫기" role="button">닫기</a></aside>
					<div className="mob_gnb_search">
						<div className="mob_gnb_search_inner">
						<label for="search_text" className="a11y">검색어</label>
							<input type="text" id="search_text" name="search_text" />
							<a href="#" className="mob_gnb_search_btn" titie="검색">Search</a>
						</div>
					</div>
					<nav className="mob_gnb_menus">
						<ul>
							<li className="mob_gnb_ttl1"><a role="button" className="en" href="#">My Starbucks<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/my/index.do">한눈에 보기</a></li>
							<li>
								<a role="button" href="#">My 리워드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/my/reward.do" required="login">리워드 및 혜택</a></li>
									<li><a href="/my/reward_star_history.do" required="login">별 히스토리</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">My 스타벅스 카드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/my/mycard_index.do" required="login">보유 카드</a></li>
									<li><a href="/my/mycard_info_input.do" required="login">카드 등록</a></li>
									<li><a href="/my/mycard_charge.do" required="login">카드 충전</a></li>
									<li><a href="/my/mycard_lost.do" required="login">분실신고/잔액이전</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">My 스타벅스 e-Gift Card<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/msr/sceGift/gift_step1.do" required="login">선물하기</a></li>
									<li><a href="/my/egiftCard.do" required="login">선물 내역</a></li>
									<li><a href="/my/egiftCard_shopping_bag.do" required="login">장바구니 내역</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">My 쿠폰<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/my/ecoupon.do?t=REG" required="login">등록하기</a></li>
									<li><a href="/my/ecoupon.do?t=GIFT" required="login">선물하기</a></li>
									<li><a href="/my/ecoupon.do?t=USE" required="login">사용하기</a></li>
								</ul>
							</li>
							<li><a href="/my/calendar.do" required="login">My 캘린더</a></li>
							
							<li><a href="/my/my_menu.do" required="login">My 메뉴</a></li>
							
							
									<li><a href="/my/vocList.do" required="login">My 고객의 소리</a></li>
							<li><a href="/my/eReceiptList.do" required="login">전자영수증</a></li>
							<li className="msRnb_btn"><a href="#">개인컵 리워드 설정</a></li>
							<li><a href="/edt/expressDtList.do" required="login">My DT Pass</a></li>
							<li>
								<a role="button" href="#">개인정보관리<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/my/myinfo_modify_login.do" required="login">개인정보확인 및 수정</a></li>
									<li><a href="/my/myinfo_out.do" required="login">회원 탈퇴</a></li>
									<li><a href="/my/myinfo_modify_pwd.do" required="login">비밀번호 변경</a></li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">COFFEE<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/coffee/index.do">한눈에 보기</a></li>
							<li>
								<a role="button" href="#">커피<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/coffee/product_list.do">스타벅스 원두</a></li>
									<li><a href="/coffee/product_list.do?PACKAGE=01">스타벅스 비아</a></li>
									
									<li><a href="/coffee/product_list.do?PACKAGE=05">스타벅스앳홈 by 캡슐</a></li>
									<li><a href="/coffee/productFinder.do">나와 어울리는 커피</a></li>
								</ul>
							</li>
							
							<li>
								<a role="button" href="#">커피 이야기<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/coffee/story.do">농장에서 우리의 손으로</a></li>
									<li><a href="/coffee/story.do?PACKAGE=02">최상의 아라비카 원두</a></li>
									<li><a href="/coffee/story.do?PACKAGE=03">스타벅스 로스트 스펙트럼</a></li>
									<li><a href="/coffee/story.do?PACKAGE=04">스타벅스 디카페인</a></li>
									
								</ul>
							</li>
							<li>
								<a role="button" href="#">스타벅스 리저브<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/coffee/reserve_info.do">ABOUT</a></li>
									<li><a href="/coffee/reserve_magazine_list.do">RESERVE MAGAZINE</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">에스프레소 음료<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/coffee/doppio.do">도피오</a></li>
									<li><a href="/coffee/espresso_macchiato.do">에스프레소 마키아또</a></li>
									<li><a href="/coffee/americano.do">아메리카노</a></li>
									<li><a href="/coffee/caramel_macchato.do">마키아또</a></li>
									<li><a href="/coffee/cappuccino.do">카푸치노</a></li>
									<li><a href="/coffee/latte.do">라떼</a></li>
									<li><a href="/coffee/mocha.do">모카</a></li>
									
									
									
									<li className="mgnb_gold"><a href="#">·프로모션 상품</a></li>
									<li className="mgnb_gold"><a href="#">·브런치 유어 웨이</a></li> 
								</ul>
							</li>
							<li>
								<a role="button" href="#">최상의 커피를 즐기는 법<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/coffee/higher_enjoy.do">커피 프레스</a></li>
									<li><a href="/coffee/higher_enjoy.do?PACKAGE=01">푸어 오버</a></li>
									<li><a href="/coffee/higher_enjoy.do?PACKAGE=02">아이스 푸어 오버</a></li>
									<li><a href="/coffee/higher_enjoy.do?PACKAGE=03">커피 메이커</a></li>
									
								</ul>
							</li>

						</ul>
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">MENU<span className="mob_gnb_arrow_down"></span></a>
							<li><a href="/menu/index.do">한눈에 보기</a></li>
							<li>
								<a role="button" href="#">음료<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/menu/drink_list.do">전체보기</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_cold_brew">콜드 브루</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_brood">브루드 커피</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_espresso">에스프레소</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_frappuccino">프라푸치노</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_blended">블렌디드</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_refresher">스타벅스 리프레셔</a></li> 
									<li><a href="/menu/drink_list.do?CATE_CD=product_fizzo">스타벅스 피지오</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_tea">티(티바나)</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_etc">기타 제조 음료</a></li>
									<li><a href="/menu/drink_list.do?CATE_CD=product_juice">스타벅스 주스(병음료)</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">푸드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/menu/food_list.do">전체보기</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_bakery">브레드</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_cake">케이크</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_sandwich">샌드위치 &amp; 샐러드</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_wram_food">따뜻한 푸드</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_fruit_yogurt">과일 &amp; 요거트</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_snack">스낵 &amp; 미니 디저트</a></li>
									<li><a href="/menu/food_list.do?CATE_CD=product_icecream">아이스크림</a></li>
                                    
								</ul>
							</li>
							<li>
								<a role="button" href="#">상품<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/menu/product_list.do">전체보기</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_mug">머그</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_glass">글라스</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_plastic">플라스틱 텀블러</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_stainless">스테인리스 텀블러</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_vacuum">보온병</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_accessories">액세서리</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_present">선물세트</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_coffee">커피 용품</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_teaPackage">패키지 티(티바나)</a></li>
									<li><a href="/menu/product_list.do?CATE_CD=product_syrup">시럽</a></li>
									
								</ul>
							</li>
							<li>
								<a role="button" href="#">카드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/menu/card_list.do">전체보기</a></li>
									<li><a href="/menu/card_list.do?CATE_CD=product_offline">실물카드</a></li>
									<li><a href="/menu/card_list.do?CATE_CD=product_egift">e-Gift 카드</a></li>
								</ul>
							</li>
							
								<a href="/wholecake/reserve_cake01.do">온라인 케익 예약 <span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="#">케익선택</a></li>
									<li><a href="#">예약정보입력</a></li>
									<li><a href="#">예약완료</a></li>
								</ul>
							</li> 
							<li>
								<a role="button" href="#">메뉴 이야기<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/store/store_nitro_coldbrew.do">나이트로 콜드브루</a></li>
									<li><a href="/store/store_coldbrew.do">콜드 브루</a></li>
									<li><a href="/menuStory/teavana.do">스타벅스 티바나</a></li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="mob_gnb_ttl2">
                <a role="button" className="en" href="#">STORE<span className="mob_gnb_arrow_down"></span></a></li>
                <li><a href="/store/index.do">한눈에 보기</a></li>
                <li>
                  <a role="button" href="#">매장 찾기<span className="mob_gnb_arrow_down"></span></a>
                  <ul>
                    <li><a href="/store/store_map.do?disp=quick">빠른 검색</a></li>
                    <li><a href="/store/store_map.do?disp=locale">지역 검색</a></li>
                  </ul>
                </li>
                <li><a href="/store/store_drive.do">드라이브 스루 매장</a></li>
                <li><a href="/store/store_reserve.do">스타벅스 리저브 매장</a></li>
                <li><a href="/store/store_community.do">커뮤니티 스토어 매장</a></li>
                <li>
                  <a role="button" href="#">매장 이야기<span className="mob_gnb_arrow_down"></span></a>
                  <ul>
                    
                    <li><a href="/store/store_star_field.do">티바나 바 매장</a></li>
                    
                  </ul>
                </li>
						</ul>
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">RESPONSIBILITY<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/responsibility/index.do">한눈에 보기</a></li>
							<li><a href="/responsibility/starbucks_shared_planet.do">사회공헌 캠페인 소개</a></li> 
							<li>
								<a role="button" href="#">지역 사회 참여 활동<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/responsibility/hope_delivery.do">희망배달 캠페인</a></li>
									<li><a href="/responsibility/talent_donation.do">재능기부 카페 소식</a></li>
									<li><a href="/responsibility/community_store.do">커뮤니티 스토어</a></li>
									<li><a href="/responsibility/youth_resource.do">청년 지원 프로그램</a></li>
									<li><a href="/responsibility/our_agriculture.do">우리 농산물 사랑 캠페인</a></li>
									<li><a href="/responsibility/our_culture_defend.do">우리 문화 지키기</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">환경보호 활동<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/responsibility/environment.do">친환경 활동</a></li>
									<li><a href="/responsibility/no_disposable_cup.do">일회용 컵 없는 매장</a></li>
									<li><a href="/responsibility/bean_recycling.do">커피 원두 재활용</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">윤리 구매<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/responsibility/ethically_sourcing.do">윤리적 원두 구매</a></li>
									<li><a href="/responsibility/fair_trade.do">공정무역 인증</a></li>
									<li><a href="/responsibility/farmer_support.do">커피 농가 지원 활동</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">글로벌 사회 공헌<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/responsibility/sp_ethical_management.do">윤리경영 보고서</a></li>
									<li><a href="/responsibility/starbucks_foundation.do">스타벅스 재단</a></li>
									<li><a href="/responsibility/sp_global_month.do">지구촌 봉사의 달</a></li>
								</ul>
							</li>
						</ul>
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">Starbucks Rewards<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/msr/index.do">한눈에 보기</a></li>
							<li>
								<a role="button" href="#">스타벅스 리워드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/msr/msreward/about.do">스타벅스 리워드 소개</a></li> 
									<li><a href="/msr/msreward/level_benefit.do">등급 및 혜택</a></li>
									<li><a href="/msr/msreward/star.do">스타벅스 별</a></li>
									<li><a href="/community/faq.do?menu_cd=STB2703&cate=F17">자주 하는 질문</a></li> 
								</ul>
							</li>
							<li>
								<a role="button" href="#">스타벅스 카드<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/msr/scard/about.do">스타벅스 카드 소개</a></li>
									<li><a href="/msr/scard/scard_gallery.do">스타벅스 카드 갤러리</a></li>
									<li><a href="/msr/scard/register_inquiry.do">등록 및 조회</a></li>
									<li><a href="/msr/scard/charge_information.do">충전 및 이용안내</a></li>
									<li><a href="/msr/scard/lost_report.do">분실신고/환불신청</a></li>
									<li><a href="/community/faq.do?menu_cd=STB2703&cate=F05">자주 하는 질문</a></li> 
								</ul>
							</li>
							<li>
								<a role="button" href="#">스타벅스 e-Gift Card<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/msr/sceGift/egift_information.do">스타벅스 e-Gift Card 소개</a></li>
									<li><a href="/msr/sceGift/msr_useguide.do">이용안내</a></li>
									<li><a href="/msr/sceGift/gift_step1.do" required="login">선물하기</a></li>
									<li><a href="/community/faq.do?menu_cd=STB2703&cate=F22">자주 하는 질문</a></li> 
								</ul>
							</li>
						</ul>
						
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">CORPORATE SALES<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/footer/co_sales/index.do">단체 및 기업 구매 안내</a></li>
							<li>
								<a role="button" href="#">단체 주문 배달 안내<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>
									<li><a href="/footer/group_order/order.do">단체 주문 신청</a></li>
									<li><a href="/footer/group_order/list.do">신청 내역 조회</a></li>
								</ul>
							</li>
						</ul>
						
						<ul>
							<li className="mob_gnb_ttl2"><a role="button" className="en" href="#">WHAT'S NEW<span className="mob_gnb_arrow_down"></span></a></li>
							<li><a href="/whats_new/index.do">한눈에 보기</a></li>
							<li>
								<a role="button" href="#">이벤트<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/whats_new/campaign_list.do">전체</a></li>
									<li><a href="/whats_new/campaign_list.do?menu_cd=STB2812">스타벅스 카드</a></li>
									<li><a href="/whats_new/campaign_list.do?menu_cd=STB2813">스타벅스 리워드</a></li> 
									<li><a href="/whats_new/campaign_list.do?menu_cd=STB2814">온라인</a></li>
									
									
								</ul>
							</li>
							<li>
								<a role="button" href="#">뉴스<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/whats_new/news_list.do">전체</a></li>
									<li><a href="/whats_new/news_list.do?cate=N01">상품 출시</a></li>
									<li><a href="/whats_new/news_list.do?cate=N02">스타벅스와 문화</a></li>
									<li><a href="/whats_new/news_list.do?cate=N03">스타벅스 사회공헌</a></li>
									<li><a href="/whats_new/news_list.do?cate=N04">스타벅스 카드출시</a></li>
								</ul>
							</li>
							<li>
								<a role="button" href="#">매장별 이벤트<span className="mob_gnb_arrow_down"></span></a>
								<ul>
									<li><a href="/whats_new/store_event_list.do">일반 매장</a></li>
									<li><a href="/whats_new/store_event_list.do?search_date=1&tab=1">신규 매장</a></li>
								</ul>
							</li>
							<li><a href="/whats_new/notice_list.do">공지사항</a></li>
							<li><a href="/whats_new/wallpaper.do">월페이퍼</a></li>
						</ul>
					</nav>
				</div>
			</div>
    </>
   );
}

export default MobGnb;