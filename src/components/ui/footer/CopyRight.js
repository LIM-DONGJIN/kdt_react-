import React from 'react';

function CopyRight() {
  return ( 
    <aside className="copyright">
    <a className="c_00b050" href="/footer/etc/privacy.do">개인정보처리방침</a>
    <a href="/footer/etc/rules_vod.do" className="mbn">영상정보처리기기 운영관리 방침</a>
    <a href="/footer/etc/rules.do">홈페이지 이용약관</a>
    <a href="/footer/etc/rules_loc.do" className="mbn">위치정보 이용약관</a>
    <a href="/footer/etc/rules_msr.do" className="mbn">스타벅스 카드 이용약관</a>
    <a href="/footer/etc/rules_non.do" className="mbn">비회원 이용약관</a>
    <span className="br">
    <a href="/footer/etc/rules_mdp.do">My DT Pass 서비스 이용약관</a></span> 
    <a href="/footer/etc/hotline.do" className="last">윤리경영 핫라인</a>
    <br/>
    <a className="btned_link" href="/footer/etc/coming_route.do">찾아오시는 길</a>
    <a className="btned_link" href="/footer/partnership/new_partner.do">신규입점제의</a>
    <a className="btned_link" href="/footer/etc/sitemap.do">사이트 맵</a><br/>
    <ul className="copy_menu">
      <li>사업자등록번호 : 201-81-21515</li>
      <li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</li> 
      <li>TEL : 1522-3232</li>
      <li>개인정보 책임자 : 이현수</li>
    </ul>
    <span className="en">ⓒ 2023 Starbucks Coffee Company. All Rights Reserved.</span>
  </aside>
   );
}

export default CopyRight;