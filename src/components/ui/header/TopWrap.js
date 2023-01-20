import React from 'react';
import topMenuDatas from '../../../datas/topMenuDatas';
import Logo from './Logo';
import TopMenuLi from './TopMenuLi';

function TopWrap() {

  return ( 
    <div id="mstopWrap">
        <div id="gnb">
          <div className="sub_gnb_wrap">
            <div className="sub_gnb_wrap_inner">
              <Logo 
                title="Stabucks" 
                text="스타벅스 코리아"
              />
              <nav className="util_nav">
                <ul>
                  {
                    topMenuDatas.map(item => (
                      <TopMenuLi 
                        key={item.id}
                        item={item}
                      />
                    ))
                  }
                </ul>
              </nav>
              <p className="btn_search">
                <a href="#"><img alt="통합검색" src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"/></a>
              </p>
              <a href="#" className="rCup3_wrap" role="button" title="마이 리워드 레이어 열기"></a>
            </div>
            <nav className="sub_gnb_nav">
              <div className="sub_gnb_nav_inner">
              </div>
            </nav>
          </div>
        </div>
      </div>		
   );
}

export default TopWrap;