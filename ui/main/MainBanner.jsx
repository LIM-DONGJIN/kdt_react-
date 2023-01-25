import React from 'react';

function MainBanner() {
  return ( 
    <div id="topWrap">
			<div className="layer_floating">
					<div className="badge_cont1">
						<a href="https://www.starbucks.co.kr/plcc/promotionView.do?eventCode=STH02"  onclick="GaFloating('PLCC 스타벅스 현대카드 1월 프로모션')">
							<img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/RHDZWh_20230103083817498.png" alt="PLCC 스타벅스 현대카드 1월 프로모션" className="pc-badge" />
							<img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/RHDZWh_20230103083824455.png" alt="PLCC 스타벅스 현대카드 1월 프로모션" className="mobile-badge" />
						</a>
					</div>
			</div>
				
      <div className="main-visual_wrap">
        <div className="main-visual_inner">
          <div className="main-visual_slogan">
            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_logo.png" alt="HAPPY 2023 FIND YOUR LUCK" className="pc-slogan"/>
            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_m_newyear_top_logo.png" alt="HAPPY 2023 FIND YOUR LUCK" className="m-slogan"/>
          </div>
          <div className="main-visual_set">
            <div className="set_common set_01">
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_1_1.png" alt="골든 미모사 그린 티" className="pc-drink"/>
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_m_newyear_top_drink1.png" alt="골든 미모사 그린 티" className="m-drink"/>
            </div>
            <div className="set_common set_02">
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_2_1.png" alt="블랙 햅쌀 고봉 라떼" className="pc-drink"/>
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_m_newyear_top_drink_2_1.png" alt="블랙 햅쌀 고봉 라떼" className="m-drink"/>
            </div>
            <div className="set_common set_03">
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_3_1.png" alt="스타벅스 튜메릭 라떼" className="pc-drink"/>
             <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_m_newyear_top_drink_3_1.png" alt="스타벅스 튜메릭 라떼" className="m-drink"/>
            </div>
          </div>
          <div className="btn_slogan">
            <a href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2111">자세히 보기</a>
          </div>
        </div>
      </div>
		</div>
  );
}

export default MainBanner;