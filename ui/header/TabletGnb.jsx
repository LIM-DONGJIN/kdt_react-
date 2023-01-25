import React from 'react';

function TabletGnb() {
  return ( 
    <div className="tablet_gnb_wrap">
      <h1 className="logo"><a href="/">스타벅스 코리아</a></h1>
      <nav className="tablet_gnb_sep">
        <ul>
          <li className="tablet_gnb01"><a href="#" role="button" title="마이 리워드 레이어 열기"><span class="rCup2"></span></a></li>
          <li className="tablet_gnb02"><a href="/my/index.do" required="login"><span className="a11y">마이스타벅스</span></a></li>
          <li className="tablet_gnb03"><a href="/store/store_map.do"><span className="a11y">매장찾기</span></a></li>
          <li className="tablet_gnb04"><a href="#"><span className="a11y" role="button">메뉴열기</span></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TabletGnb;