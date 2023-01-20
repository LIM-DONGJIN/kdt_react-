import React from 'react';

function MainPromotionBanner() {
  return (
    <section className="main_prom_bnr">
				<div className="main_prom_bnr_swiper slider">
					<ul className="main_prom_bxslider">
					</ul>
					<div className="main_slider_controller">
						<div className="main_slider_controls"></div>
						<div className="main_slider_pagers"></div>
					</div>
					<p className="main_prevBtn"><a href="#"><span className="a11y">이전 프로모션</span></a></p>
					<p className="main_nextBtn"><a href="#"><span className="a11y">다음 프로모션</span></a></p>
				</div>
			</section>
    );
}

export default MainPromotionBanner;