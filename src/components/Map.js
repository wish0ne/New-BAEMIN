import React, { Fragment, useEffect, useRef } from "react";
import "./Map.css";
import { BiChevronRight } from "react-icons/bi";

const DefaultMap = () => {
  return (
    <div className="DefaultMap">
      <div className="strong">가게를</div>
      <div className="strong">클릭 하세요</div>
      <div className="light">선택한 가게가 지도에 나타나요</div>
      <img src="img/배달이.png" alt="배달이" className="images" />
    </div>
  );
};

const Panel = () => {
  return (
    <div className="Panel">
      <div className="info">
        <span className="walk">도보</span>
        <div className="bigInfo">
          <span className="minute">10분</span>
          <span className="meter">821m</span>
        </div>
        <span className="kcal">77kcal</span>
      </div>
      <div className="order">
        <span>주문하러가기</span>
        <BiChevronRight size={40} />
      </div>
    </div>
  );
};

const NaverMap = () => {
  const container = useRef(null);

  const mapOptions = {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 18,
  };
  useEffect(() => {
    new window.naver.maps.Map(container.current, mapOptions);
  });
  return (
    <Fragment>
      <div id="map" ref={container} style={{ width: "100%" }}></div>
    </Fragment>
  );
};

const Map = () => {
  return (
    <div className="Map">
      {/* <DefaultMap /> */}
      <NaverMap />
      <Panel />
    </div>
  );
};

export default Map;
