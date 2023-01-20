import React from 'react';

function LineNotice() {
  return ( 
    <section className="line_notice">
				<div className="line_notice_left"></div>
				<div className="line_notice_right"></div>
				<div className="line_notice_bg">
					<div className="line_notice_bgl">
						<div className="line_notice_inner">
							<dl className="line_notice_inner_l">
								<dt className="notice_ttl">
									<img src="https://image.istarbucks.co.kr/common/img/common/notice_ttl.png" alt="공지사항" />
								</dt>
								<dd>
									<ul className="news_result">
									</ul>
								</dd>
							</dl>
							<p className="line_notice_inner_r">
								<span><a href="#" title="공지사항 더보기">더보기</a></span>
							</p>
						</div>
					</div>
					<div className="line_notice_bgr">
						<a href="#">
							<p className="prom_ttl">스타벅스 프로모션</p>
							<span className="btn_prom"><img src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" alt="스타벅스 프로모션 펼쳐보기" role="button" /></span>
						</a>
					</div>
				</div>
			</section>
   );
}

export default LineNotice;