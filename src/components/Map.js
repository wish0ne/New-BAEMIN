import React from "react";
import "./Map.css";

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
const Map = () => {
  return (
    <div className="Map">
      <DefaultMap />
    </div>
  );
};

export default Map;
